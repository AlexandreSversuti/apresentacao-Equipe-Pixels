//Criando back-end para parte de feedback top kkk
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post('/api/feedback', (req, res) => {
    console.log(req.body);

    res.json({
        mensagem: 'Feedback recebido!'
    })
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT} 🚀`);
});