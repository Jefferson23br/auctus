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


    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 5;
    const offset = (page - 1) * limit;

    const { status, data_inicio, data_fim } = req.query;

    let whereClauses = ['v.usuario_id = $1'];
    let queryParams = [usuario_id];
    let paramIndex = 2;

    if (status) {
        whereClauses.push(`v.status_pagamento = $${paramIndex++}`);
        queryParams.push(status);
    }
    if (data_inicio) {
        whereClauses.push(`v.data_viagem >= $${paramIndex++}`);
        queryParams.push(data_inicio);
    }
    if (data_fim) {
        whereClauses.push(`v.data_viagem <= $${paramIndex++}`);
        queryParams.push(data_fim);
    }

    const whereString = whereClauses.join(' AND ');

    try {

        const totalQueryText = `
            SELECT COUNT(*) AS total_count
            FROM app.viagens v
            WHERE ${whereString}
        `;
        const totalResult = await db.query(totalQueryText, queryParams);
        const totalItems = parseInt(totalResult.rows[0].total_count, 10);


        const queryText = `
            SELECT v.*, veic.placa, veic.descricao as veiculo_descricao
            FROM app.viagens v
            JOIN app.veiculos veic ON v.veiculo_id = veic.id
            WHERE ${whereString}
            ORDER BY v.data_viagem DESC, v.criado_em DESC
            LIMIT $${paramIndex++} OFFSET $${paramIndex++}
        `;
        const finalQueryParams = [...queryParams, limit, offset];

        const result = await db.query(queryText, finalQueryParams);
    
        res.status(200).json({
            viagens: result.rows,
            totalItems: totalItems,
            totalPages: Math.ceil(totalItems / limit),
            currentPage: page
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro no servidor ao buscar viagens.' });
    }
};