const db = require('../config/db');
const TAXA_KM = 0.48;

exports.createViagem = async (req, res) => {
    const { veiculo_id, data_viagem, distancia_percorrida, local_saida, local_chegada, descricao } = req.body;
    const usuario_id = req.user.id;

    if (!veiculo_id || !data_viagem || !distancia_percorrida) {
        return res.status(400).json({ message: 'Veículo, data e distância percorrida são obrigatórios.' });
    }
    if (parseFloat(distancia_percorrida) <= 0) {
        return res.status(400).json({ message: 'A distância percorrida deve ser um número positivo.' });
    }

    try {
        const veiculoCheck = await db.query('SELECT id FROM app.veiculos WHERE id = $1 AND usuario_id = $2', [veiculo_id, usuario_id]);
        if (veiculoCheck.rowCount === 0) {
            return res.status(403).json({ message: 'Acesso negado. O veículo não pertence a este usuário.' });
        }

        const valor_reembolso = parseFloat(distancia_percorrida) * TAXA_KM;

        const queryText = `
            INSERT INTO app.viagens (usuario_id, veiculo_id, data_viagem, distancia_percorrida, local_saida, local_chegada, descricao, valor_reembolso)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
            RETURNING *`;
        
        const values = [usuario_id, veiculo_id, data_viagem, distancia_percorrida, local_saida, local_chegada, descricao, valor_reembolso];

        const result = await db.query(queryText, values);
        res.status(201).json({ message: 'Viagem registrada com sucesso!', viagem: result.rows[0] });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro no servidor ao registrar viagem.' });
    }
};

exports.getMinhasViagens = async (req, res) => {
    const usuario_id = req.user.id;
    try {
        const queryText = `
            SELECT v.*, veic.placa, veic.descricao as veiculo_descricao
            FROM app.viagens v
            JOIN app.veiculos veic ON v.veiculo_id = veic.id
            WHERE v.usuario_id = $1
            ORDER BY v.data_viagem DESC, v.criado_em DESC
        `;
        const result = await db.query(queryText, [usuario_id]);
        res.status(200).json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro no servidor ao buscar viagens.' });
    }
};