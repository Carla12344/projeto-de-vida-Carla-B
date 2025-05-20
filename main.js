const botoes = document.querySelectorAll(".botao");

for(let i=0; < botoes.length; i++) {
    botoes[i].onclick = function()  {
        botoes[i].classList.add(".ativo");
    };
}