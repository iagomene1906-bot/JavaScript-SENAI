const botao = document.getElementById("botaoTema");
const corpoPagina = document.body;
const caixa = document.getElementById("caixa");
const titulo = document.getElementById("titulo");
const texto = document.getElementById("texto");

let modoEscuroAtivado = false;

botao.addEventListener("click", () =>{
    if(modoEscuroAtivado === true){
        corpoPagina.style.backgroundColor = "#ffffff"; // muda o fundo para branco
        corpoPagina.style.color = "#000000"; // muda a cor da letra para preto

        caixa.style.backgroundColor = "#F4F4F4"; // muda cor de fundo da caixa
        caixa.style.border = "1px solid #CCCCCC"; // muda cor da borda da caixa

        botao.style.backgroundColor = "#000000"; // muda cor de fundo do botão
        botao.style.color = "#FFFFFF"; // muda a cor da letra do botão 
        botao.style.border = "none"; // retira a borda criada por padrão

        titulo.style.color = "#222222"; // muda a cor do titulo do texto
        texto.style.color = "#333333"; // muda a cor da letra do texto

        titulo.innerText = "Tema claro";
        botao.innerText = "Ativar modo escuro"; // muda o texto do botao

        modoEscuroAtivado = false; // indica que o modo escuro não está mais ativado
    }
    else{
        corpoPagina.style.backgroundColor = "#1E1E1E"; // muda o fundo para preto
        corpoPagina.style.color = "#FFFFFF"; // muda a cor da letra para branco

        caixa.style.backgroundColor = "#333333"; // muda cor de fundo da caixa
        caixa.style.border = "1px solid #FFFFFF"; // muda cor da borda da caixa

        botao.style.backgroundColor = "#FFFFFF"; // muda cor de fundo do botão
        botao.style.color = "#000000"; // muda a cor da letra do botão 
        botao.style.border = "none"; // retira a borda criada por padrão

        titulo.style.color = "#F6D447"; // muda a cor do titulo do texto
        texto.style.color = "#DDDDDD"; // muda a cor da letra do texto

        titulo.innerText = "Tema escuro";
        botao.innerText = "Ativar modo claro"; // muda o texto do botao

        modoEscuroAtivado = true; // indica que o modo escuro não está mais ativado
    }
});