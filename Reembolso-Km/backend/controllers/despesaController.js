const db = require('../config/db');

exports.createDespesa = async (req, res) => {
    const { veiculo_id, data_despesa, tipo_despesa, forma_pagamento, valor, status_pagamento, link_comprovante, descricao } = req.body;
    const usuario_id = req.user.id;

    if (!veiculo_id || !data_despesa || !tipo_despesa || !valor || !status_pagamento) {
        return res.status(400).json({ message: 'Campos essenciais estão faltando.' });
    }

    try {
        const veiculoCheck = await db.query('SELECT id FROM app.veiculos WHERE id = $1 AND usuario_id = $2', [veiculo_id, usuario_id]);
        if (veiculoCheck.rowCount === 0) {
            return res.status(403).json({ message: 'Acesso negado. O veículo não pertence a este usuário.' });
        }

        const queryText = `
            INSERT INTO app.despesas (usuario_id, veiculo_id, data_despesa, tipo_despesa, forma_pagamento, valor, status_pagamento, link_comprovante, descricao)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
            RETURNING *`;
        
        const values = [usuario_id, veiculo_id, data_despesa, tipo_despesa, forma_pagamento, valor, status_pagamento, link_comprovante, descricao];

        const result = await db.query(queryText, values);
        res.status(201).json({ message: 'Despesa registrada com sucesso!', despesa: result.rows[0] });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro no servidor ao registrar despesa.' });
    }
};

exports.getMinhasDespesas = async (req, res) => {
    const usuario_id = req.user.id;
    try {
        const queryText = `
            SELECT d.*, v.placa, v.descricao as veiculo_descricao
            FROM app.despesas d
            JOIN app.veiculos v ON d.veiculo_id = v.id
            WHERE d.usuario_id = $1
            ORDER BY d.data_despesa DESC, d.criado_em DESC
        `;
        const result = await db.query(queryText, [usuario_id]);
        res.status(200).json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro no servidor ao buscar despesas.' });
    }
};

exports.updateDespesa = async (req, res) => {
    const { id } = req.params;
    const { veiculo_id, data_despesa, tipo_despesa, forma_pagamento, valor, status_pagamento, link_comprovante, descricao } = req.body;
    const usuario_id = req.user.id;

    try {
        const queryText = `
            UPDATE app.despesas
            SET veiculo_id = $1, data_despesa = $2, tipo_despesa = $3, forma_pagamento = $4, valor = $5, status_pagamento = $6, link_comprovante = $7, descricao = $8
            WHERE id = $9 AND usuario_id = $10
            RETURNING *`;
        
        const values = [veiculo_id, data_despesa, tipo_despesa, forma_pagamento, valor, status_pagamento, link_comprovante, descricao, id, usuario_id];
        
        const result = await db.query(queryText, values);

        if (result.rowCount === 0) {
            return res.status(404).json({ message: 'Despesa não encontrada ou não pertence a este usuário.' });
        }
        res.status(200).json({ message: 'Despesa atualizada com sucesso!', despesa: result.rows[0] });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro no servidor ao atualizar despesa.' });
    }
};

exports.deleteDespesa = async (req, res) => {
    const { id } = req.params;
    const usuario_id = req.user.id;

    try {
        const result = await db.query('DELETE FROM app.despesas WHERE id = $1 AND usuario_id = $2', [id, usuario_id]);
        if (result.rowCount === 0) {
            return res.status(404).json({ message: 'Despesa não encontrada ou não pertence a este usuário.' });
        }
        res.status(200).json({ message: 'Despesa deletada com sucesso.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro no servidor ao deletar despesa.' });
    }
};