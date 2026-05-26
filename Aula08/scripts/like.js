const botao = document.getElementById("botaoLike");
const titulo = document.getElementById("titulo");
const texto = document.getElementById("texto");

let like = false;

botao.addEventListener("click", () => {
    if(like === true){
        titulo.innerText = "💟";
        botao.innerText = "LIKE";
        texto.innerText = "Clique no botão para dar like na página!";
        like = false;
    }
    else{
        titulo.innerText = "❤️";
        botao.innerText = "DESLIKE";
        texto.innerText = "Clique no botão para dar deslike na página.";
        like = true;
    }
})