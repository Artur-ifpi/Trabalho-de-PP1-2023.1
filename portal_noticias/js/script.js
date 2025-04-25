let imagens = ["img/imagem1.jpg", "img/imagem2.jpg", "img/imagem3.jpg"];
let descricoes = ["Descrição 1", "Descrição 2", "Descrição 3"];
let indice = 0;
function mostrarImagem() {
 document.getElementById("imagem").src = imagens[indice];
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