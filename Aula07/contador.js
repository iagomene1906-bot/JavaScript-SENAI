const botao = document.getElementById("mais1"); // botao
const texto = document.getElementById("paragrafo"); // paragrafo
let soma = 0;

botao.addEventListener("click", () =>{
    soma ++;
    texto.innerText = soma;
})