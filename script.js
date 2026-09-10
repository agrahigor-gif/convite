const botaoSim = document.getElementById("sim");
const botaoNao = document.getElementById("nao");

const telaPrincipal = document.getElementById("telaPrincipal");
const telaSim = document.getElementById("telaSim");


// ========================================
// BOTÃO SIM
// ========================================

botaoSim.addEventListener("click", function () {

    telaPrincipal.classList.add("escondido");

    telaSim.classList.remove("escondido");

});


// ========================================
// BOTÃO NÃO
// ========================================

botaoNao.addEventListener("mouseover", fugir);

botaoNao.addEventListener("touchstart", function(event) {

    event.preventDefault();

    fugir();

});


// Faz o botão NÃO fugir
function fugir() {

    const largura = window.innerWidth;
    const altura = window.innerHeight;

    const larguraBotao = botaoNao.offsetWidth;
    const alturaBotao = botaoNao.offsetHeight;

    const novaPosicaoX =
        Math.random() * (largura - larguraBotao - 20);

    const novaPosicaoY =
        Math.random() * (altura - alturaBotao - 20);


    botaoNao.style.position = "fixed";

    botaoNao.style.left = novaPosicaoX + "px";

    botaoNao.style.top = novaPosicaoY + "px";

}
