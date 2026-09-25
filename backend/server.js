//Criando back-end para parte de feedback top kkk
const express = require('express');
const db = require('./database/database');
const app = express();
app.use(express.json());

const PORT = 3000;

console.log('banco conectado!');

app.listen(PORT, () => {
    console.log('Servidor rodando na porta 3000');
});