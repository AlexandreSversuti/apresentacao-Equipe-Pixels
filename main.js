window.addEventListener("scroll", function() {
    const header = document.querySelector(".cabecalho");
    const sessaoColab = document.querySelector(".principal__colab");
    const sessaoProjetos = document.querySelector(".principal__projetos");

    const posicaoSessaoColab = sessaoColab.getBoundingClientRect();
    const posicaoSessaoProjetos = sessaoProjetos.getBoundingClientRect();

    if (posicaoSessaoProjetos.top <= 50) {
        header.style.backgroundColor = "#2e6e22";
        header.style.boxShadow = "0rem 0.15rem 0.5rem #1d4616ab";
        header.style.setProperty('--cor-hoverHeader', '#FFFFFF'); 
        header.style.setProperty('--cor-background', '#2e6e22');
    } else if (posicaoSessaoColab.top <= 50) {
        header.style.backgroundColor = "#633417";
        header.style.boxShadow = "0rem 0.15rem 0.5rem #4b2811";
        header.style.setProperty('--cor-hoverHeader', '#FFFFFF');
        header.style.setProperty('--cor-background', '#864b1d');
    } else {
        header.style.backgroundColor = "#5CD6DB";
        header.style.boxShadow = "0rem 0.15rem 0.5rem rgba(118, 170, 165, 0.865)";
        header.style.setProperty('--cor-hoverHeader', '#5CD6DB');
        header.style.setProperty('--cor-background', '#FFFFFF');
    }
});