const http = require('http');
http.maxHeaderSize = 81920;
const express = require('express');
const { Pool } = require('pg');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = 3000;

// Conexão com o banco de dados PostgreSQL
const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

app.use(bodyParser.json());

// Rota para cadastrar um novo cliente
app.post('/clientes', async (req, res) => {
    const { nome, email, telefone, coordenadaX, coordenadaY } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO clientes(nome, email, telefone, coordenadaX, coordenadaY) VALUES($1, $2, $3, $4, $5) RETURNING *',
            [nome, email, telefone, coordenadaX, coordenadaY]
        );
        console.log('Cliente cadastrado com sucesso:', result.rows[0]);
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error('Erro ao cadastrar cliente:', err.message);
        res.status(500).send('Server error');
    }
});


// Rota para listar todos os clientes
app.get('/clientes', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM clientes');
        res.status(200).json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
