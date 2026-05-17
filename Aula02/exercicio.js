// EXERCÍCIO 1

console.log("\n===== EXERCÍCIO 1 =====");

let nome = "Iago";
let idade = 17;
let profissao = null;
let cidade = "Ribeirão Pires";

console.log(`Meu nome é ${nome}, tenho ${idade} anos, trabalho como ${profissao} e moro em ${cidade}.`);

// EXERCÍCIO 2

console.log("\n===== EXERCÍCIO 2 =====\n");

let produto = "Caderno";
let preco = 19.90;
let quantidade = 2;

console.log(`Comprei ${quantidade} unidade de ${produto} por R$${preco} cada.`);

// EXERCÍCIO 3

console.log("\n===== EXERCÍCIO 3 =====\n")

let valor1 = 10;
let valor2 = 20;

console.log(`A soma do valor1 e valor2 ${valor1 + valor2}`);
console.log(`A subtração do valor1 e valor2 ${valor1 - valor2}`);
console.log(`A multiplicação do valor1 e valor2 ${valor1 * valor2}`);
console.log(`A divisão do valor1 e valor2 ${valor1 / valor2}`);

// EXERCÍCIO 4

console.log("\n===== EXERCÍCIO 4 =====\n")

let nome2 = "Nome";
let numero = 4;
let valorboleano = true;
let valornulo = null;
let valornaodefinido;

console.log(`A variavel ${nome2}`);
console.log(`É do tipo ${typeof nome2}`);
console.log(`A variavel ${numero}`);
console.log(`É do tipo ${typeof numero}`);
console.log(`A variavel ${valorboleano}`);
console.log(`É do tipo ${typeof valorboleano}`);
console.log(`A variavel ${valornulo}`);
console.log(`É do tipo ${typeof valornulo}`);
console.log(`A variavel ${valornaodefinido}`);
console.log(`É do tipo ${typeof valornaodefinido}`);

// EXERCÍCIO 5

console.log("\n===== EXERCÍCIO 5 =====\n")

let padrao = "100";
console.log(padrao);
console.log(typeof padrao);
mudarNumero = Number(padrao);
console.log(mudarNumero);
console.log(typeof mudarNumero);
mudarString = String(mudarNumero);
console.log(mudarString);
console.log(typeof mudarString);

// EXTRA

console.log("\n===== EXTRA =====\n")

let nome3 = prompt("Escreva seu nome: ");
let idade3 = prompt("Agora sua idade: ");
let altura3 = prompt("Sua altura: ");
let peso = prompt("Qual seu peso: ");
let cidade3 = prompt("Ónde você mora: ");
let profissao3 = prompt("Qual a sua profissão? ")

console.log("Cadastro do usuário.")
console.log(`nome: ${nome3} `)
console.log(`Idade: ${idade3} `)
console.log(`Altura: ${altura3} `)
console.log(`Peso: ${peso} `)
console.log(`Cidade: ${cidade3} `)
console.log(`Profissão: ${profissao3} `)