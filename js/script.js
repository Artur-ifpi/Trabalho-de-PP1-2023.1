let imagens = ["img/imagem1.jpg", "img/imagem2.jpg", "img/imagem3.jpg", "img/imagem4.jpg"];
let descricoes = ["Como saber se tem alguém espionando seu celular? Descubra em 4 passos", "Bruno Henrique vive seca no Flamengo em meio às denúncias sobre apostas", "Mortes e drones interceptados: conflito entre Paquistão e Índia escala", "Cria corvos e eles te arrancarão os olhos"]; 
let acessibilidade = ["Figura encapuzada acessando um celular","jogador do flamengo Bruno Henrique, com legenda 'Bruno henrique foi embaixador de bet: fazer muito green","As duas bandeiras de índia e Paquistão separadas por arame barbado","Charge de Roberto Kaz, para a revista Piauí, mostrando o passarinho do twitter em situações adversas."]
let indice = 0;

function mostrarImagem() {
    document.getElementById("imagem").src = imagens[indice];
    document.getElementById("descricao").textContent = descricoes[indice]; 
    document.getElementById("imagem").alt = acessibilidade[indice]; 

    const imagem = document.getElementById("imagem");
    imagem.classList.remove("fade");
    void imagem.offsetWidth; 
    imagem.classList.add("fade");

    imagem.src = imagens[indice];
    imagem.alt = acessibilidade[indice];
    document.getElementById("descricao").textContent = descricoes[indice];
}

document.getElementById("proxima").onclick = () => {
    indice = (indice + 1) % imagens.length;
    mostrarImagem();
};

document.getElementById("anterior").onclick = () => {
    indice = (indice - 1 + imagens.length) % imagens.length;
    mostrarImagem();
};

mostrarImagem();