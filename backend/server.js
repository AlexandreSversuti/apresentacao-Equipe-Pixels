//Criando back-end para parte de feedback top kkk
const express = require('express');
const db = require('./database/database');
const app = express();
app.use(express.json());

const PORT = 3000;
console.log('banco conectado!');

app.post('/feedback', (req, res) => {
    const { nome, email, mensagem } = req.body;
    const insertFeedback = db.prepare(`
        INSERT INTO feedback (nome, email, mensagem) 
        VALUES (?, ?, ?)
    `);
    insertFeedback.run(nome, email, mensagem);
    console.log('Informaçoes salvas no banco');
    res.json({ mensagem: 'Feedback recebido com sucesso!' });
})

app.listen(PORT, () => {
    console.log('Servidor rodando na porta 3000');
});