require('dotenv').config(); 

const express = require('express');
const cors = require('cors');
const path = require('path');


const authRoutes = require('./routes/authRoutes');
const veiculoRoutes = require('./routes/veiculoRoutes');
const viagemRoutes = require('./routes/viagemRoutes');
const despesaRoutes = require('./routes/despesaRoutes');
const uploadRoutes = require('./routes/uploadRoutes');
const pagamentoRoutes = require('./routes/pagamentoRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const relatorioRoutes = require('./routes/relatorioRoutes');


const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
  res.send('API do Reembolso de Km - Telsign está no ar!');
});

app.use('/api/auth', authRoutes);
app.use('/api/veiculos', veiculoRoutes);
app.use('/api/viagens', viagemRoutes);
app.use('/api/despesas', despesaRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/pagamentos', pagamentoRoutes); 
app.use('/api/dashboard', dashboardRoutes); 
app.use('/api/relatorios', relatorioRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});