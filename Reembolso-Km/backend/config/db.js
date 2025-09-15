const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: 5432,
});

pool.connect((err) => {
  if (err) {
    console.error('Erro de conexão com o banco de dados', err.stack);
  } else {
    console.log('Conexão com o banco de dados PostgreSQL estabelecida.');
  }
});

module.exports = {
  query: (text, params) => pool.query(text, params),
  pool, 
};