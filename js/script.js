let imagens = ["img/imagem1.jpg", "img/imagem2.jpg", "img/imagem3.jpg", "img/imagem4.jpg"];
let descricoes = ["Como saber se tem alguém espionando seu celular? Descubra em 4 passos", "Bruno Henrique vive seca no Flamengo em meio às denúncias sobre apostas", "Mortes e drones interceptados: conflito entre Paquistão e Índia escala", "Cria corvos e eles te arrancarão os olhos"]; 
let acessibilidade = ["Figura encapuzada acessando um celular","jogador do flamengo Bruno Henrique, com legenda 'Bruno henrique foi embaixador de bet: fazer muito green","As duas bandeiras de índia e Paquistão separadas por arame barbado","Charge de Roberto Kaz, para a revista Piauí, mostrando o passarinho do twitter em situações adversas."]
let indice = 0;

function mostrarImagem() {
    const imagem = document.getElementById("imagem");
    const descricao = document.getElementById("descricao");

    // Aplica fade-out
    imagem.classList.add("fade-out");

    // Aguarda a transição terminar para trocar a imagem e aplicar fade-in
    setTimeout(() => {
        imagem.src = imagens[indice];
        imagem.alt = acessibilidade[indice];
        descricao.textContent = descricoes[indice];

        imagem.classList.remove("fade-out");
    }, 500); // Tempo igual ao da transição
}

document.getElementById("proxima").onclick = () => {
    indice = (indice + 1) % imagens.length;
    mostrarImagem();
};

document.getElementById("anterior").onclick = () => {
    indice = (indice - 1 + imagens.length) % imagens.length;
    mostrarImagem();
};

// Ao carregar a página
window.onload = () => {
    mostrarImagem();
};


