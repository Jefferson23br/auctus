const db = require('../config/db');

exports.createVeiculo = async (req, res) => {
  const { placa, descricao, data_inicio_aluguel } = req.body;
  const usuario_id = req.user.id;

  if (!placa || !data_inicio_aluguel) {
    return res.status(400).json({ message: 'Os campos placa e data_inicio_aluguel são obrigatórios.' });
  }

  try {
    const queryText = 'INSERT INTO app.veiculos (usuario_id, placa, descricao, data_inicio_aluguel) VALUES ($1, $2, $3, $4) RETURNING id';
    const values = [usuario_id, placa, descricao, data_inicio_aluguel];

    const result = await db.query(queryText, values);

    res.status(201).json({ 
      message: 'Veículo alugado cadastrado com sucesso!', 
      veiculoId: result.rows[0].id 
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro no servidor ao cadastrar veículo.' });
  }
};

exports.updateVeiculo = async (req, res) => {
    const veiculoId = req.params.id;
    const { placa, descricao, data_inicio_aluguel, data_fim_aluguel } = req.body;
    const usuario_id = req.user.id;

    if (!placa || !descricao || !data_inicio_aluguel) {
        return res.status(400).json({ message: 'Todos os campos, exceto data de fim, são obrigatórios.' });
    }

    try {
        const queryText = `
            UPDATE app.veiculos 
            SET placa = $1, descricao = $2, data_inicio_aluguel = $3, data_fim_aluguel = $4 
            WHERE id = $5 AND usuario_id = $6 
            RETURNING *`;
        

        const dataFim = data_fim_aluguel ? data_fim_aluguel : null;

        const values = [placa, descricao, data_inicio_aluguel, dataFim, veiculoId, usuario_id];

        const result = await db.query(queryText, values);

        if (result.rowCount === 0) {
            return res.status(404).json({ message: 'Veículo não encontrado ou não pertence a este usuário.' });
        }

        res.status(200).json({ message: 'Veículo atualizado com sucesso!', veiculo: result.rows[0] });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro no servidor ao atualizar o veículo.' });
    }
};

exports.getMeusVeiculos = async (req, res) => {
  const usuario_id = req.user.id;

  try {
    const result = await db.query('SELECT id, placa, descricao, data_inicio_aluguel, data_fim_aluguel FROM app.veiculos WHERE usuario_id = $1 ORDER BY data_inicio_aluguel DESC', [usuario_id]);
    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro no servidor ao buscar veículos.' });
  }
};

exports.finalizarAluguelVeiculo = async (req, res) => {
    const { data_fim_aluguel } = req.body;
    const veiculoId = req.params.id;
    const usuario_id = req.user.id;

    if (!data_fim_aluguel) {
        return res.status(400).json({ message: 'O campo data_fim_aluguel é obrigatório.' });
    }

    try {
        const queryText = 'UPDATE app.veiculos SET data_fim_aluguel = $1 WHERE id = $2 AND usuario_id = $3 RETURNING *';
        const values = [data_fim_aluguel, veiculoId, usuario_id];

        const result = await db.query(queryText, values);

        if (result.rowCount === 0) {
            return res.status(404).json({ message: 'Veículo não encontrado ou não pertence a este usuário.' });
        }

        res.status(200).json({ message: 'Aluguel de veículo finalizado com sucesso!', veiculo: result.rows[0] });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro no servidor ao finalizar aluguel.' });
    }
};