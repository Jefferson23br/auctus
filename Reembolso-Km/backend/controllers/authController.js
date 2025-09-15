const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
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