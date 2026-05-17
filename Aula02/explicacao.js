// VARIÁVEIS

/*
    LET     -> Quando o valor da variável pode mudar, usamos let
    VAR     -> Forma antiga - evitar usar (está sendo descontinuado por conta dos muitos erros que causa)
    CONST   -> Quando o alor da variável NÃO pode mudar
*/

// let nome = "Clark Kent";
// var idade = 17;
// const cidade = "Pequenópolis";

// console.log() -> imprime valores na tela
// console.log(nome);
// console.log(idade);
// console.log(cidade);

// trocando as informações da variável com LET
// nome = "Iago";
// console.log(nome);

// trocando as informações da variável com VAR
// idade = 22;
// console.log(idade);

// imprimindo valores juntos
// console.log(nome + cidade);

// imprimindo valores juntos com texto
// concatenação
// console.log("Nome: " + nome + ", cidade: " + cidade);

// interpolação
// console.log(`Nome: ${nome}, cidade: ${cidade}`);

// TIPOS PRIMITIVOS

// String (texto)
// let mensagem = "Olá, mundo!";
// console.log(typeof mensagem);

// Number (número)
// let idade = 30;
// let temperatura = 30.5;
// console.log(typeof idade);
// console.log(typeof temperatura);

// Boolean (booleano -> verdadeiro / falso)
// let estaChovendo = true;
// console.log(typeof estaChovendo);

//Undefined - > Quando não definimos um valor para uma variavel 
// let nome;
// console.log(typeof nome);

// Null / object -> usado para ausência intencional de um valor 
// let endereco = null;
// console.log(typeof endereco);

// Conversão dos tipos
// Conversão implícita (automática)
// let soma = "5" + 3;
// let sub = "5" - 3;

// console.log("Conversão automatica");
// console.log(typeof soma);
// console.log(soma); // 53 string
// console.log(typeof sub);
// console.log(sub);// 2 number

// Conversão explícita 

// converter para número 
// let numero = "42";
// let convertido = Number(numero);

// converter para string
// let numero2 = 100;
// let converteString = String(numero2);

// Operadores Relacionais
/*
    >       MAIOR QUE 
    <       MENOR QUE
    >=      MAIOR OU IGUAL
    <=      MENOR OU IGUAL
    ==      IGUALDADE (ignora tipo)
    ===     IGUALDADE ESTRITA (verifica tipo)
    !=      DIFERENTE (ignora tipo)
    !==     DIFERENTE ESTRITO (verifica tipo)
*/

// Exemplo 
// console.log(10 > 5); // true
// console.log(10 < 5); // false

// console.log(5 == "5") // true
// console.log(5 === "5") // false -> compara valor e tipo

// Operadores Matemáticos
/*
    + SOMA
    - SUBTRAÇÃO
    * MULTIPLICAÇÃO
    / DIVISÃO
    % RESTO DA DIVISÃO
    ** POTENCIA
    // DIVISÃO IGNORANDO O RESTO
*/

// console.log(5)

// Exemplo

// let a = 5;
// let b = 50;

// console.log(a+b); // soma
// console.log(a-b); // subtração
// console.log(a/b); // divisão
// console.log(a*b); // multiplicação

// console.log(a%b); // resto da divisão
// console.log(a**b); // potência

// Operadores Lógicos
/*
    &&  (AND)   -> OPERADOR E
    ||  (OR)    -> OPERADOR OU
    !   (NOT)   -> OPERADOR NÃO (negação)
*/

// Operador &&
// Retorna verdadeiro quando todas as condições são cumpridas

// let num1 = 5
// let num2 = 5
// let num3 = 10
// console.log(num1 == num2 && num3 > num2); // true

// Operador ||
// Retorna verdadeiro quando pelo menos uma confição for verdadeira 
// let num4 = 9
// console.log(num1 == num4 || num1 == num2); // true

// Operador !(não)
// inverte a condição, se é verdadeiro -> vira falso e vice e versa
// let logado = true;
// console.log(!logado); // false

// ARRAY (lista)
// let frutas = ["maçã", "banana", "uva"];

// Imprimindo a lista frutas
// console.log (frutas);

// Imprimindoa fruta na posição 2
// console.log (frutas[2]);

// Imprimindo o numero de itens que tem uma lista
// console.log (frutas.length);

// OBJETOS

// let pessoa = {
//     nome: "Pedro",
//     idade: 18
// };

// Imprime a pessoa completa
// console.log(pessoa);

// Imprime somente o nome da pessoa
// console.log(pessoa.nome);

// Imprime somente a idade da pessoa
// console.log(pessoa.idade);

// ARRAY DE OBJETO - Programação orientada a Objeto

// let cachorros = [
//     {
//         nome: "Sirius",
//         raca: "Pastor Belga Groenendael",
//     },
//     {
//         nome: "Woody",
//         raca: "Yorkshire",
//     },
// ]

// console.log(cachorros);

// Recebendo dados do usuário
// let nome = prompt("Digite seu nome: ")
// alert(`Olá, ${nome}`)

function mensagem(){
    alert("Olá, seja bem vindo(a)");
    let nome = prompt("Digite seu nome");
    alert(`${nome} seja bem vindo`);
}