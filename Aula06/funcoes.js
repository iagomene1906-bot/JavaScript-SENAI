// Funções nativas do JavaScript
// ajudam a manter um código limpo e organizado
// evita muita repetição de código

// MAP -> Percorre uma lista e cria uma nova lista com base em uma condição
let numeros = [1, 2, 3, 4];

let numerosDobrados = numeros.map(function(numero){
    return numero * 2;
});

console.log(numerosDobrados);

// mesma função, mas agora com arrow function
let numerosDobradosArrow = numeros.map(numero => numero * 2);
console.log(numerosDobradosArrow);

let teste = numeros.map(numero => {
    let resultado = numero * 2;
    return resultado;
});

console.log(teste);

// IF Ternário
// se for verdadeiro -> a resposta vem depois da interrogação
// se for falso -> a resposta vem depois dos dois pontos
let resposta = (idade > 18) ? "maior de idade" : "menor de idade";

// se for verdadeiro -> a resposta vem depois da interrogação
// se for falso -> a resposta vem depois dos dois pontos
// se depois dos dois pontos tiver outra condição, a gente volta para o começo
let resposta2 = (idade > 18) ? "maior de idade" : (idade > 75) ? "idoso" : "menor de idade";