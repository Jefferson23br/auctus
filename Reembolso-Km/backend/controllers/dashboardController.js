const db = require('../config/db');

exports.getDashboardSummary = async (req, res) => {
    const usuario_id = req.user.id;
    
    const hoje = new Date();
    const mes = parseInt(req.query.mes, 10) || hoje.getMonth() + 1;
    const ano = parseInt(req.query.ano, 10) || hoje.getFullYear();

    try {

        const kmMesQuery = `
            SELECT COALESCE(SUM(distancia_percorrida), 0) as total_km
            FROM app.viagens
            WHERE usuario_id = $1 AND EXTRACT(MONTH FROM data_viagem) = $2 AND EXTRACT(YEAR FROM data_viagem) = $3
        `;
        const kmResult = await db.query(kmMesQuery, [usuario_id, mes, ano]);

 
        const aReceberMesQuery = `
            SELECT COALESCE(SUM(valor_reembolso), 0) as total_a_receber
            FROM app.viagens
            WHERE usuario_id = $1 AND status_pagamento = 'A Pagar' 
            AND EXTRACT(MONTH FROM data_viagem) = $2 AND EXTRACT(YEAR FROM data_viagem) = $3
        `;
        const aReceberResult = await db.query(aReceberMesQuery, [usuario_id, mes, ano]);


        const despesasMesQuery = `
            SELECT COALESCE(SUM(valor), 0) as total_despesas
            FROM app.despesas
            WHERE usuario_id = $1 AND EXTRACT(MONTH FROM data_despesa) = $2 AND EXTRACT(YEAR FROM data_despesa) = $3
        `;
        const despesasResult = await db.query(despesasMesQuery, [usuario_id, mes, ano]);

        const pendentesAnterioresQuery = `
            SELECT COUNT(*) as count_pendentes
            FROM app.viagens
            WHERE usuario_id = $1 AND status_pagamento = 'A Pagar' AND data_viagem < date_trunc('month', CURRENT_DATE)
        `;
        const pendentesResult = await db.query(pendentesAnterioresQuery, [usuario_id]);


        const totalPagoQuery = `
            SELECT COALESCE(SUM(p.valor_total), 0) as total_pago
            FROM app.pagamentos p
            WHERE p.usuario_id = $1 
            AND EXTRACT(MONTH FROM p.data_pagamento) = $2 
            AND EXTRACT(YEAR FROM p.data_pagamento) = $3
        `;
        const totalPagoResult = await db.query(totalPagoQuery, [usuario_id, mes, ano]);

        res.status(200).json({
            totalKmMes: parseFloat(kmResult.rows[0].total_km),
            totalAReceberMes: parseFloat(aReceberResult.rows[0].total_a_receber),
            totalDespesasMes: parseFloat(despesasResult.rows[0].total_despesas),
            pendentesMesesAnteriores: parseInt(pendentesResult.rows[0].count_pendentes, 10),
            totalReembolsadoMes: parseFloat(totalPagoResult.rows[0].total_pago) // <-- NOVO DADO
        });

    } catch (error) {
        console.error('Erro ao buscar resumo do dashboard:', error);
        res.status(500).json({ message: 'Erro no servidor ao buscar resumo.' });
    }
};