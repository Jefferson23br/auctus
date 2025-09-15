const db = require('../config/db');

exports.getRelatorioViagens = async (req, res) => {
    const usuario_id = req.user.id;
    const { data_inicio, data_fim } = req.query;

    if (!data_inicio || !data_fim) {
        return res.status(400).json({ message: 'As datas de início e fim são obrigatórias.' });
    }

    try {
        const queryText = `
            SELECT 
                v.data_viagem,
                v.local_saida,
                v.local_chegada,
                v.distancia_percorrida,
                v.valor_reembolso,
                v.status_pagamento,
                p.data_pagamento AS data_reembolso,
                CASE 
                    WHEN v.status_pagamento = 'Pago' THEN v.valor_reembolso
                    ELSE 0 
                END AS valor_reembolsado
            FROM 
                app.viagens v
            LEFT JOIN 
                app.pagamento_viagens pv ON v.id = pv.viagem_id
            LEFT JOIN 
                app.pagamentos p ON pv.pagamento_id = p.id
            WHERE 
                v.usuario_id = $1 
                AND v.data_viagem BETWEEN $2 AND $3
            ORDER BY 
                v.data_viagem ASC;
        `;
        
        const result = await db.query(queryText, [usuario_id, data_inicio, data_fim]);
        
        res.status(200).json(result.rows);

    } catch (error) {
        console.error('Erro ao gerar relatório de viagens:', error);
        res.status(500).json({ message: 'Erro no servidor ao gerar relatório.' });
    }
};
