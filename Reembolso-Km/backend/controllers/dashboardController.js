const db = require('../config/db');

exports.getDashboardSummary = async (req, res) => {
    const usuario_id = req.user.id;

    const { mes, ano, data_inicio, data_fim, filterType } = req.query;

    try {
        let kmResult, aReceberResult, despesasResult, totalPagoResult;

        if (filterType === 'month' && mes && ano) {

            const intMes = parseInt(mes, 10);
            const intAno = parseInt(ano, 10);

            const kmMesQuery = `
                SELECT COALESCE(SUM(distancia_percorrida), 0) as total_km
                FROM app.viagens
                WHERE usuario_id = $1 AND EXTRACT(MONTH FROM data_viagem) = $2 AND EXTRACT(YEAR FROM data_viagem) = $3
            `;
            kmResult = await db.query(kmMesQuery, [usuario_id, intMes, intAno]);

            const aReceberMesQuery = `
                SELECT COALESCE(SUM(valor_reembolso), 0) as total_a_receber
                FROM app.viagens
                WHERE usuario_id = $1 AND status_pagamento = 'A Pagar' 
                AND EXTRACT(MONTH FROM data_viagem) = $2 AND EXTRACT(YEAR FROM data_viagem) = $3
            `;
            aReceberResult = await db.query(aReceberMesQuery, [usuario_id, intMes, intAno]);

            const despesasMesQuery = `
                SELECT COALESCE(SUM(valor), 0) as total_despesas
                FROM app.despesas
                WHERE usuario_id = $1 AND EXTRACT(MONTH FROM data_despesa) = $2 AND EXTRACT(YEAR FROM data_despesa) = $3
            `;
            despesasResult = await db.query(despesasMesQuery, [usuario_id, intMes, intAno]);
            
            const totalPagoQuery = `
                SELECT COALESCE(SUM(p.valor_total), 0) as total_pago
                FROM app.pagamentos p
                WHERE p.usuario_id = $1 
                AND EXTRACT(MONTH FROM p.data_pagamento) = $2 
                AND EXTRACT(YEAR FROM p.data_pagamento) = $3
            `;
            totalPagoResult = await db.query(totalPagoQuery, [usuario_id, intMes, intAno]);

        } else if (filterType === 'period' && data_inicio && data_fim) {
            const kmPeriodoQuery = `
                SELECT COALESCE(SUM(distancia_percorrida), 0) as total_km
                FROM app.viagens
                WHERE usuario_id = $1 AND data_viagem BETWEEN $2 AND $3
            `;
            kmResult = await db.query(kmPeriodoQuery, [usuario_id, data_inicio, data_fim]);

            const aReceberPeriodoQuery = `
                SELECT COALESCE(SUM(valor_reembolso), 0) as total_a_receber
                FROM app.viagens
                WHERE usuario_id = $1 AND status_pagamento = 'A Pagar' 
                AND data_viagem BETWEEN $2 AND $3
            `;
            aReceberResult = await db.query(aReceberPeriodoQuery, [usuario_id, data_inicio, data_fim]);

            const despesasPeriodoQuery = `
                SELECT COALESCE(SUM(valor), 0) as total_despesas
                FROM app.despesas
                WHERE usuario_id = $1 AND data_despesa BETWEEN $2 AND $3
            `;
            despesasResult = await db.query(despesasPeriodoQuery, [usuario_id, data_inicio, data_fim]);

            const totalPagoQuery = `
                SELECT COALESCE(SUM(p.valor_total), 0) as total_pago
                FROM app.pagamentos p
                WHERE p.usuario_id = $1 AND p.data_pagamento BETWEEN $2 AND $3
            `;
            totalPagoResult = await db.query(totalPagoQuery, [usuario_id, data_inicio, data_fim]);

        } else {
            return res.status(400).json({ message: 'Parâmetros de filtro inválidos. Forneça o tipo de filtro e os valores correspondentes.' });
        }

        const pendentesAnterioresQuery = `
            SELECT COUNT(*) as count_pendentes
            FROM app.viagens
            WHERE usuario_id = $1 AND status_pagamento = 'A Pagar' AND data_viagem < date_trunc('month', CURRENT_DATE)
        `;
        const pendentesResult = await db.query(pendentesAnterioresQuery, [usuario_id]);

        res.status(200).json({
            totalKmMes: parseFloat(kmResult.rows[0].total_km),
            totalAReceberMes: parseFloat(aReceberResult.rows[0].total_a_receber),
            totalDespesasMes: parseFloat(despesasResult.rows[0].total_despesas),
            pendentesMesesAnteriores: parseInt(pendentesResult.rows[0].count_pendentes, 10),
            totalReembolsadoMes: parseFloat(totalPagoResult.rows[0].total_pago)
        });

    } catch (error) {
        console.error('Erro ao buscar resumo do dashboard:', error);
        res.status(500).json({ message: 'Erro no servidor ao buscar resumo.' });
    }
};