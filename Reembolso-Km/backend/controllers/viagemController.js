const db = require('../config/db');
const TAXA_KM = 0.48;


exports.createOrUpdateViagem = async (req, res) => {
    const { id, veiculo_id, data_viagem, distancia_percorrida, local_saida, local_chegada, descricao, km_inicial, km_final, isDraft } = req.body;
    const usuario_id = req.user.id;

    if (!veiculo_id || !data_viagem) {
        return res.status(400).json({ message: 'Veículo e data são obrigatórios.' });
    }

    try {
        const veiculoCheck = await db.query('SELECT id FROM app.veiculos WHERE id = $1 AND usuario_id = $2', [veiculo_id, usuario_id]);
        if (veiculoCheck.rowCount === 0) {
            return res.status(403).json({ message: 'Acesso negado. O veículo não pertence a este usuário.' });
        }

        if (isDraft) {
           
            const queryText = `
                INSERT INTO app.viagens (usuario_id, veiculo_id, data_viagem, descricao, km_inicial, status_viagem, distancia_percorrida, valor_reembolso, status_pagamento)
                VALUES ($1, $2, $3, $4, $5, 'Rascunho', 0, 0, 'Rascunho')
                RETURNING *`;
            const values = [usuario_id, veiculo_id, data_viagem, descricao, km_inicial || null];
            const result = await db.query(queryText, values);
            res.status(201).json({ message: 'Viagem pré-salva com sucesso!', viagem: result.rows[0] });

        } else {
            
            if (!distancia_percorrida || parseFloat(distancia_percorrida) <= 0) {
                return res.status(400).json({ message: 'A distância percorrida é obrigatória para salvar a viagem.' });
            }
            const valor_reembolso = parseFloat(distancia_percorrida) * TAXA_KM;

            if (id) {
            
                const queryText = `
                    UPDATE app.viagens 
                    SET veiculo_id = $1, data_viagem = $2, distancia_percorrida = $3, local_saida = $4, local_chegada = $5, descricao = $6, valor_reembolso = $7, km_inicial = $8, km_final = $9, status_viagem = 'Completa', status_pagamento = 'A Pagar'
                    WHERE id = $10 AND usuario_id = $11
                    RETURNING *`;
                const values = [veiculo_id, data_viagem, distancia_percorrida, local_saida, local_chegada, descricao, valor_reembolso, km_inicial || null, km_final || null, id, usuario_id];
                const result = await db.query(queryText, values);
                if (result.rowCount === 0) return res.status(404).json({ message: 'Rascunho de viagem não encontrado.' });
                res.status(200).json({ message: 'Viagem finalizada com sucesso!', viagem: result.rows[0] });
            } else {
               
                const queryText = `
                    INSERT INTO app.viagens (usuario_id, veiculo_id, data_viagem, distancia_percorrida, local_saida, local_chegada, descricao, valor_reembolso, km_inicial, km_final, status_viagem, status_pagamento)
                    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, 'Completa', 'A Pagar')
                    RETURNING *`;
                const values = [usuario_id, veiculo_id, data_viagem, distancia_percorrida, local_saida, local_chegada, descricao, valor_reembolso, km_inicial || null, km_final || null];
                const result = await db.query(queryText, values);
                res.status(201).json({ message: 'Viagem registrada com sucesso!', viagem: result.rows[0] });
            }
        }
    } catch (error) {
        console.error('Erro em createOrUpdateViagem:', error);
        res.status(500).json({ message: 'Erro no servidor ao processar viagem.' });
    }
};


exports.getMinhasViagensRascunho = async (req, res) => {
    const usuario_id = req.user.id;
    try {
        const queryText = `
            SELECT v.id, v.data_viagem, v.descricao, v.km_inicial, veic.placa
            FROM app.viagens v
            JOIN app.veiculos veic ON v.veiculo_id = veic.id
            WHERE v.usuario_id = $1 AND v.status_viagem = 'Rascunho'
            ORDER BY v.data_viagem DESC`;
        const result = await db.query(queryText, [usuario_id]);
        res.status(200).json(result.rows);
    } catch (error) {
        console.error('Erro ao buscar viagens em rascunho:', error);
        res.status(500).json({ message: 'Erro ao buscar rascunhos.' });
    }
};


exports.getMinhasViagens = async (req, res) => {
    const usuario_id = req.user.id;
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 5;
    const offset = (page - 1) * limit;
    const { status, data_inicio, data_fim } = req.query;

    let whereClauses = ['v.usuario_id = $1', "v.status_viagem = 'Completa'"];
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
        const totalQueryText = `SELECT COUNT(*) AS total_count FROM app.viagens v WHERE ${whereString}`;
        const totalResult = await db.query(totalQueryText, queryParams);
        const totalItems = parseInt(totalResult.rows[0].total_count, 10);

        const queryText = `
            SELECT v.*, veic.placa, veic.descricao as veiculo_descricao
            FROM app.viagens v
            JOIN app.veiculos veic ON v.veiculo_id = veic.id
            WHERE ${whereString}
            ORDER BY v.data_viagem DESC, v.criado_em DESC
            LIMIT $${paramIndex++} OFFSET $${paramIndex++}`;
        const finalQueryParams = [...queryParams, limit, offset];
        const result = await db.query(queryText, finalQueryParams);
        
        res.status(200).json({
            viagens: result.rows,
            totalItems: totalItems,
            totalPages: Math.ceil(totalItems / limit),
            currentPage: page
        });
    } catch (error) {
        console.error('Erro ao buscar viagens:', error);
        res.status(500).json({ message: 'Erro no servidor ao buscar viagens.' });
    }
};

exports.deleteViagem = async (req, res) => {
    const { id } = req.params;
    const usuario_id = req.user.id;

    try {
        const result = await db.query('DELETE FROM app.viagens WHERE id = $1 AND usuario_id = $2', [id, usuario_id]);
        if (result.rowCount === 0) {
            return res.status(404).json({ message: 'Viagem não encontrada ou não pertence a este usuário.' });
        }
        res.status(200).json({ message: 'Viagem deletada com sucesso.' });
    } catch (error) {
        console.error('Erro ao deletar viagem:', error);
        res.status(500).json({ message: 'Erro no servidor ao deletar viagem.' });
    }
};