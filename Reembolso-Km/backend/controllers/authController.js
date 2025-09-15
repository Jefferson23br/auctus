const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto'); // Adicionado para gerar tokens seguros
const nodemailer = require('nodemailer'); // Adicionado para enviar e-mails
const db = require('../config/db');

exports.register = async (req, res) => {
  const { nome, email, senha } = req.body;

  if (!nome || !email || !senha) {
    return res.status(400).json({ message: 'Por favor, preencha todos os campos.' });
  }

  try {
    const salt = await bcrypt.genSalt(10);
    const senha_hash = await bcrypt.hash(senha, salt);
    const queryText = 'INSERT INTO auth.usuarios (nome, email, senha_hash) VALUES ($1, $2, $3) RETURNING id';
    const values = [nome, email, senha_hash];

    const result = await db.query(queryText, values);

    res.status(201).json({ message: 'Usuário registrado com sucesso!', userId: result.rows[0].id });
  } catch (error) {
    if (error.code === '23505') { 
      return res.status(409).json({ message: 'Este e-mail já está em uso.' });
    }
    console.error(error);
    res.status(500).json({ message: 'Erro no servidor ao tentar registrar.' });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Por favor, forneça e-mail e senha.' });
  }

  try {
    const result = await db.query('SELECT * FROM auth.usuarios WHERE email = $1', [email]);
    const user = result.rows[0];

    if (!user) {
      return res.status(401).json({ message: 'Credenciais inválidas.' });
    }

    const isMatch = await bcrypt.compare(password, user.senha_hash);

    if (!isMatch) {
      return res.status(401).json({ message: 'Credenciais inválidas.' });
    }

    const payload = { id: user.id, nome: user.nome };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' });

    res.status(200).json({ message: 'Login bem-sucedido!', token: token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro no servidor ao tentar fazer login.' });
  }
};

// --- NOVA FUNÇÃO PARA SOLICITAR REDEFINIÇÃO DE SENHA ---
exports.forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const userResult = await db.query('SELECT * FROM auth.usuarios WHERE email = $1', [email]);
    if (userResult.rows.length === 0) {
      // Por segurança, não informamos que o e-mail não foi encontrado.
      return res.status(200).json({ message: 'Se o e-mail estiver cadastrado, um link de recuperação será enviado.' });
    }

    // Gerar um token seguro
    const resetToken = crypto.randomBytes(32).toString('hex');
    const hashedToken = crypto.createHash('sha256').update(resetToken).digest('hex');

    // Definir data de expiração (ex: 1 hora)
    const tokenExpiry = new Date(Date.now() + 3600000);

    // Salvar o token HASHED e a data de expiração no banco de dados
    await db.query(
      'UPDATE auth.usuarios SET reset_token = $1, reset_token_expires = $2 WHERE email = $3',
      [hashedToken, tokenExpiry, email]
    );

    // Enviar e-mail para o usuário
    // ATENÇÃO: Substitua com as configurações do seu serviço de e-mail (ex: SendGrid, Mailgun, ou um SMTP do Gmail)
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST, // ex: 'smtp.gmail.com'
      port: process.env.EMAIL_PORT, // ex: 587
      secure: false, // true para porta 465, false para outras
      auth: {
        user: process.env.EMAIL_USER, // seu e-mail
        pass: process.env.EMAIL_PASS, // sua senha
      },
    });

    // O link deve apontar para a página do seu frontend que cuidará da redefinição
    const resetUrl = `https://auctusconsultoria.com.br/Reembolso-Km/frontend/reset-password.html?token=${resetToken}`;

    await transporter.sendMail({
      to: email,
      from: '"Sistema de Reembolso" <seu-email@example.com>',
      subject: 'Redefinição de Senha',
      html: `<p>Você solicitou uma redefinição de senha. Clique no link a seguir, que é válido por 1 hora:</p>
             <p><a href="${resetUrl}">${resetUrl}</a></p>`,
    });

    res.status(200).json({ message: 'Se o e-mail estiver cadastrado, um link de recuperação será enviado.' });

  } catch (error) {
    console.error('Erro em forgotPassword:', error);
    res.status(500).json({ message: 'Erro no servidor.' });
  }
};

// --- NOVA FUNÇÃO PARA EFETIVAMENTE REDEFINIR A SENHA ---
exports.resetPassword = async (req, res) => {
  const { token } = req.params;
  const { senha } = req.body;

  if (!senha) {
    return res.status(400).json({ message: 'A nova senha é obrigatória.' });
  }

  try {
    // Hasheia o token recebido para comparar com o que está no banco
    const hashedToken = crypto.createHash('sha256').update(token).digest('hex');

    // Busca o usuário pelo token e verifica se não expirou
    const userResult = await db.query(
      'SELECT * FROM auth.usuarios WHERE reset_token = $1 AND reset_token_expires > NOW()',
      [hashedToken]
    );

    if (userResult.rows.length === 0) {
      return res.status(400).json({ message: 'Token inválido ou expirado.' });
    }

    const user = userResult.rows[0];

    // Criptografa a nova senha
    const salt = await bcrypt.genSalt(10);
    const senha_hash = await bcrypt.hash(senha, salt);

    // Atualiza a senha e limpa os campos de redefinição
    await db.query(
      'UPDATE auth.usuarios SET senha_hash = $1, reset_token = NULL, reset_token_expires = NULL WHERE id = $2',
      [senha_hash, user.id]
    );

    res.status(200).json({ message: 'Senha redefinida com sucesso!' });
  } catch (error) {
    console.error('Erro em resetPassword:', error);
    res.status(500).json({ message: 'Erro no servidor.' });
  }
};