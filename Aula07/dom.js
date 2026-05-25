// Manipulação de DOM
// DOM -> Documente Object Model
// é a forma como o navegador organiza o html para que o js consiga acessar os elementos

// Principais métodos de seleção de elementos no DOM

/*
    getElementById -> serve para selecionar um elemento pelo seu ID.

    querySelector -> serve para selecionar o primeiro elemento que corresponde a um seletor CSS(tag(ex: p, h1, h2), ID, nome de classe).

    querySelectorAll -> serve para selecionar TODOS os elementos que correspondem a um seletor.

    getElementByClassName -> serve para selecionar TODOS os elementos que correspondem a uma classe.
*/

// getElementById
// const titulo = document.getElementById("titulo");
// const valor = document.getElementById("titulo").innerText

// console.log(titulo);
// console.log(valor);

// querySelector
// const titulo = document.querySelector("#titulo"); // chamando id -> #id

// const paragrafo = document.querySelector(".paragrafo"); // chamando classe -> .classe

// const tituloH2 = document.querySelector("h2"); // chamando tags -> h2

// console.log(titulo);
// console.log(paragrafo);
// console.log(tituloH2);

// querySelectorAll
// const elementos = document.querySelectorAll(".texto");
// imprime o elemento (p)
// console.log(elementos);

// imprime o valor que está dentro do elemento (p)
// elementos.forEach(elemento => console.log(elemento.innerText));

// trocando o texto que está dentro do elemento
// elementos.forEach(elemento => elemento.innerText = "Alterado");

// trocando a tag
// elementos.forEach(elemento => elemento.innerHTML = "<h2>Item<h2>");

// trocando a cor da fonte (letra)
// elementos.forEach(elemento => elemento.style.color = "#0000ff");

// Eventos
// Eventos são ações do usuário

// Evento de click
// const botao = document.getElementById("btn");

// adicionando um "escutador de eventos" no botão
// botao.addEventListener("click", () => {
//     alert("Você clicou!");
// })

// Evento de digitação (input / keyup)
// evento input -> dispara sempre que digita, em tempo real
// const campo = document.getElementById("campo");
// const resultado = document.getElementById("resultado");

// campo.addEventListener("input", () => {
    // value -> valor digitado dentro da caixa de texto
    // resultado.innerText = campo.value;
// })

// evento keyup -> dispara quando solta a tecla
// campo.addEventListener("keyup", () => {
//     resultado.innerText = campo.value;
//     console.log("Tecla pressionada");
// })

// evento mouse
// const elemento = document.getElementById("troca_cor");
// const botao = document.getElementById("btn");

// mouse over -> quanda passa o mouse por cima do elemento
// elemento.addEventListener("mouseover", () => {
    // elemento.style.backgroundColor = "#FF0000"
// })

// mouseout -> quando o mouse sai de cima do elemento
// elemento.addEventListener("mouseout", () => {
    // elemento.style.backgroundColor = "#0000ff";
    // botao.style.backgroundColor = "#0000ff";
    // elemento.style.backgroundColor = ""; // tira o fundo, volta a cor padrão
// })

// pegar a posição do mouse
// document.addEventListener("mousemove", (evento) => {
//     console.log("Posição de X: ", evento.clientX, " Posição do Y: ", evento.clientY);
// })

// Evento de formulário (submit)
// const form = document.getElementById("form");

// comportamento padrão de um formulário é recarregar a página
// form.addEventListener("submit", (evento) => {
    // evento.preventDefault(); // impede o comportamento padrão

    // const nome = document.getElementById("nome").value;
    // console.log("Nome: " + nome);
// })

// criando elementos na página
// const novoElemento = document.createElement("p"); // cria um elemento <p>
// novoElemento.innerText = "Elemento novo criado"; // cria um texto no elemento

// form.appendChild(novoElemento); // estamos adicionando um elemento filho (p) dentro do pai (form).

// const botao = document.createElement("button");
// botao.innerText = "Excluir elemento";
// form.appendChild(botao);

// botao.addEventListener("click", (e) => {
    // e.preventDefault();

    // novoElemento.remove();

    // apagando direto do pai
    // form.removeChild(novoElemento)
// })

// adicionando elementos em uma lista não ordenada (ul) atraves de um input
const input = document.getElementById("input") // input
const botao = document.getElementById("add") // botao
const lista = document.getElementById("lista") // ul

botao.addEventListener("click", () =>{
    const valor = input.value; // pega o valor digitado na caixa (input)

    const li = document.createElement("li");
    li.innerText = valor;

    lista.appendChild(li);

    input.value = "";
})