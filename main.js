window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    const sessaoColab = document.querySelector(".colaboradores");
    const sessaoProjetos = document.querySelector(".projetos");

    const posicaoSessaoColab = sessaoColab.getBoundingClientRect();
    const posicaoSessaoProjetos = sessaoProjetos.getBoundingClientRect();

    if (posicaoSessaoProjetos.top <= 50) {
        header.style.backgroundColor = "#2e6e22";
        header.style.boxShadow = "0rem 0.15rem 0.5rem #1d4616ab";
        header.style.setProperty('--cor-hoverHeader', '#2e6e22'); 
        header.style.setProperty('--cor-background', '#ffffff');
    } else if (posicaoSessaoColab.top <= 50) {
        header.style.backgroundColor = "#633417";
        header.style.boxShadow = "0rem 0.15rem 0.5rem #4b2811";
        header.style.setProperty('--cor-hoverHeader', '#FFFFFF');
        header.style.setProperty('--cor-background', '#864b1d');
    } else {
        header.style.backgroundColor = "#5CD6DB";
        header.style.boxShadow = "0rem 0.15rem 0.8rem rgba(58, 112, 107, 0.48)";
        header.style.setProperty('--cor-hoverHeader', '#5CD6DB');
        header.style.setProperty('--cor-background', '#ffffff');
    }
});

//Envio de dados do feedback para o servidor e tirar sessão do formulário do site kkk
const formulario = document.querySelector('#formulario');
const inputNome = document.querySelector('#nome');
const inputEmail = document.querySelector('#email');
const inputFeedback = document.querySelector('#feedback');
const agradecimento = document.querySelector('#agradecimento')

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