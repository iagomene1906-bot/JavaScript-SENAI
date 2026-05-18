// Nível Básico

// 1. Verificar maioridade:
// let idade1 = Number(prompt("Digite uma idade: "));
// if(idade1 >= 18){
//     console.log("Maior de idade");
// }
// else{
//     console.log("Menor de idade");
// }

// 2. Verificar se um número é positivo ou negativo:
// let num1 = 10;

// if(num1 > 0){
//     console.log("Número positivo");
// }
// else{
//     console.log("Número negativo");
// }

// 3. Aprovação em uma prova:
// let nota = Number(prompt("Insira uma nota de 0 a 100: "));

// if(nota >= 60){
//     console.log("Aprovado!");
// }
// else{
//     console.log("Reprovado!")
// }

// 4. Verificar se um número é positivo, negativo ou zero:
// let num2 = Number(prompt("Insira um número: "));

// if(num2 > 0){
//     console.log("Número positivo");
// }
// else if(num2 == 0){
//     console.log("O número é zero");
// }
// else{
//     console.log("Número negativo");
// }

// 5. Classificação de idade:
// let idade2 = Number(prompt("Insira sua idade: "));

// if(idade2 <= 12){
//     console.log("Criança");
// }
// else if(idade2 <= 17){
//     console.log("Adolescente");
// }
// if(idade2 >= 18){
//     console.log("Adulto");
// }

// // 6. Verificar se um número é par ou ímpar:
// let num3 = Number(prompt("Insira um número: "));

// if(num3 % 2 == 0){
//     console.log("É par")
// }
// else{
//     console.log("É impar")
// }

// Nível Intermediário

// 1. Calculadora simples:
// let num4 = Number(prompt("Insira um número: "));
// let num5 = Number(prompt("Insira outro número: "));
// let op = prompt("Digite um operação: (+, -, *, /) ")

// switch(op){
//     case "+":
//         console.log(num4 + num5);
//         break;
//     case "-":
//         console.log(num4 - num5);
//         break;
//     case "*":
//         console.log(num4 * num5);
//         break;
//     case "/":
//         console.log(num4 / num5);
//         break;
//     default:
//         console.log("Operação inválida");
//         break;
// }

// 2. Maior entre três números:
// let num6 = Number(prompt("Insira o primeiro número: "));
// let num7 = Number(prompt("Insira o segundo número: "));
// let num8 = Number(prompt("Insira o terceiro número: "));

// if(num6 > num7 && num6 > num8){
//     console.log("O primeiro valor digitado é maior que os outros.");
// }
// else if(num7 > num6 && num7 > num8){
//     console.log("O segundo valor digitado é maior que os outros.");
// }
// else if(num8 > num7 && num8 > num6){
//     console.log("O terceiro valor digitado é maior que os outros.");
// }
// else{
//     console.log("Algum dos valores são iguais");
// }

// 3. Desconto em compras:
// let valorCompra1 = Number(prompt("Insira o valor da compra: "));

// if(valorCompra1 > 100){
//     console.log(`O valor da compra é maior do que R$100\nDesconto de 10% aplicado: ${valorCompra1 * 0.90}`);
// }
// else{
//     console.log(`O valor da compra: ${valorCompra1}`);
// }

// 4. Sistema de login simples:
// let user = String(prompt("Insira o nome de usuário: "));
// let password = String(prompt("Insira a senha de login: "));

// if(user == "admin" && password == "admin"){
//     console.log("Login bem-sucedido.");
// }
// else{
//     console.log("Acesso negado");
// }

// Nível Avançado

// 1. Frete de pedido:
// let valorCompra2 = Number(prompt("Digite o valor da sua compra: "));

// if(valorCompra2 >= 100){
//     console.log("O valor da compra é maior do que R$100:\nFrete grátis aplicado");
// }
// else if(valorCompra2 >= 50){
//     console.log("O valor da compra é igual ou maior que R$50:\nFrete de R$10 aplicado");
// }
// else{
//     console.log("O valor do frete é R$20");
// }

// 2. Acesso por idade e convite
// let idade3 = Number(prompt("Digite sua idade: "));
// let temConvite = String(prompt("Tem convite? (Sim/Não")).toLowerCase();

// if(idade3 >= 18 || temConvite == "sim"){
//     console.log("Pode entrar")
// }
// else{
//     console.log("Barrado")
// }

// 3. Conversão de notas para conceitos:
// let nota2 = Number(prompt("Digite sua nota: "));

// if(nota > 89 && nota < 101){
//     console.log("Você tirou A");
// }
// else if(nota > 79 && nota < 90){
//     console.log("Você tirou B");
// }
// else if(nota > 69 && nota < 80){
//     console.log("Você tirou C");
// }
// else if(nota > 59 && nota < 70){
//     console.log("Você tirou D");
// }
// else(nota < 60){
//     console.log("Você tirou F");
// }

// 4. Cálculo de IMC:
// let peso = Number(prompt("Digite seu peso: "));
// let altura = Number(prompt("Digite sua altura: "));

// console.log(`Seu IMC é: ${(peso / (altura ** 2)).toFixed(2)}`);

// 5. Verificação de estoque:
// let estoque = 10;

// if(estoque >= 10){
//     console.log("Produto disponível");
// }
// else if (estoque > 0 && estoque < 10) {
//     console.log("Últimas unidades");
// }
// else{
//     console.log("Esgotado");
// }