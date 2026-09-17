//Envio de dados do feedback para o servidor e tirar sessão do formulário do site kkk
const formulario = document.querySelector('#formulario');
const inputNome = document.querySelector('#nome');
const inputEmail = document.querySelector('#email');
const inputFeedback = document.querySelector('#feedback');
const agradecimento = document.querySelector('#agradecimento');

const express = require('express');
const app = express();
app.use(express.json());
console.log(app);

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    if (inputNome.checkValidity() && inputEmail.checkValidity() && inputFeedback.checkValidity()) {
        const nome = inputNome.value;
        const email = inputEmail.value;
        const feedback = inputFeedback.value;

        const dados = {
            nome,
            email,
            feedback
        }

        console.log(dados);
        }

        formulario.setAttribute('hidden', 'true');
        agradecimento.removeAttribute('hidden');
    
});