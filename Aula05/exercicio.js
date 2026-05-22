// Nível Básico

// 1. Contagem de 1 a 10:
// console.log("===== EXERCÍCIO 1 =====");
// for(i = 1; i <= 10; i++){
//     console.log(i);
// }

// 2. Tabuada de um número:
// console.log("===== EXERCÍCIO 2 =====");
// let tabuada = Number(prompt("Digite um número: "));

// for(i = 1; i <= 10; i++){
//     console.log(tabuada * i);
// }

// 3. Soma dos primeiros N números naturais:
// console.log("===== EXERCÍCIO 3 =====");
// let num = Number(prompt("Digite um número: "));
// let res = 0;

// for(i = 1; i <= num; i++){
//     res += i;
//     console.log(res);
// }

// Nível Intermediário

// 1. Exibir os números pares de 1 a 50:
// console.log("===== EXERCÍCIO 1 =====");
// for(i = 0; i <= 50; i += 2){
//     console.log(i);
// }

// 2. Jogo de adivinhação:
// console.log("===== EXERCÍCIO 2 =====");
// let aleatorio = Math.floor(Math.random() * 100);
// let digitado = Number(prompt("Tente acertar o número aleatório de 1 a 100: "));

// while(digitado != aleatorio){
//     digitado = Number(prompt("Tente acertar o número aleatório de 1 a 100: "));
// }

// console.log(`Acertou!\nO número aleatório era: ${aleatorio}`);

// 3. Contagem regressiva:
// console.log("===== EXERCÍCIO 3 =====");
// let num = Number(prompt("Digite um número: "));
// console.log(`O número digitado foi: ${num}`);

// while(num > 0){
//     num--;
//     console.log(`Contagem regressiva até zero: ${num}`);
// }

// 4. Validação de senha:
// console.log("===== EXERCÍCIO 4 =====");
// const password = "admin";

// let passwordDigitada = "";

// while(passwordDigitada != password){
//     passwordDigitada = String(prompt("Digite a senha correta para efetuar o login."));
// }

// console.log("Login efetuado!");

// 5. Soma até parar:
// console.log("===== EXERCÍCIO 5 =====");
// let numero = "";
// let soma = 0;

// do{
//     numero = Number(prompt("Digite números para somar.\nDigite '0' se quiser parar a soma."));
//     soma += numero;
//     console.log(soma);
// }while(numero != 0)

// console.log("Encerrando a soma.....");

// 6. Média de valores:
// console.log("===== EXERCÍCIO 6 =====");
// let soma = 0;
// for (let i = 1; i <= 3; i ++){
//     numero = Number(prompt(`Digite o número ${i}:`));
//     soma += numero
// }

// console.log(`Média dos números digitados: ${soma/3}`);