const db = require('../config/db');


exports.getViagensAPagar = async (req, res) => {
    const usuario_id = req.user.id;
    try {
        const queryText = `
            SELECT v.id, v.data_viagem, v.descricao, v.valor_reembolso, veic.placa
            FROM app.viagens v
            JOIN app.veiculos veic ON v.veiculo_id = veic.id
            WHERE v.usuario_id = $1 AND v.status_pagamento = 'A Pagar' -- CORRIGIDO DE VOLTA PARA 'A Pagar'
            ORDER BY v.data_viagem ASC
        `;
        const result = await db.query(queryText, [usuario_id]);
        res.status(200).json(result.rows);
    } catch (error) {
        console.error('Erro ao buscar viagens a pagar:', error);
        res.status(500).json({ message: 'Erro no servidor ao buscar viagens a pagar.' });
    }
};

exports.criarPagamento = async (req, res) => {
    const { viagens_ids, data_pagamento, metodo_pagamento, valor_total, descricao } = req.body;
    const usuario_id = req.user.id;

    if (!viagens_ids || viagens_ids.length === 0 || !data_pagamento || !metodo_pagamento || !valor_total) {
        return res.status(400).json({ message: 'Todos os campos obrigatórios devem ser preenchidos.' });
    }

    const client = await db.pool.connect();

    try {
        await client.query('BEGIN');

        const pagamentoQuery = `
            INSERT INTO app.pagamentos (usuario_id, data_pagamento, valor_total, metodo_pagamento, descricao)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING id
        `;
        const pagamentoResult = await client.query(pagamentoQuery, [usuario_id, data_pagamento, valor_total, metodo_pagamento, descricao]);
        const pagamentoId = pagamentoResult.rows[0].id;

        for (const viagemId of viagens_ids) {
            await client.query(
                'INSERT INTO app.pagamento_viagens (pagamento_id, viagem_id) VALUES ($1, $2)',
                [pagamentoId, viagemId]
            );

            const updateResult = await client.query(
                "UPDATE app.viagens SET status_pagamento = 'Pago' WHERE id = $1 AND usuario_id = $2",
                [viagemId, usuario_id]
            );

            if (updateResult.rowCount === 0) {
                throw new Error(`A viagem com ID ${viagemId} não foi encontrada ou não pertence ao usuário.`);
            }
        }

        await client.query('COMMIT');
        res.status(201).json({ message: 'Pagamento registrado com sucesso!' });

    } catch (error) {
        await client.query('ROLLBACK');
        console.error('Erro ao registrar pagamento:', error);
        res.status(500).json({ message: error.message || 'Erro no servidor ao registrar pagamento.' });
    } finally {
        client.release();
    }
};