const nomeSorveteria = "\n========== Mr. MIX ==========\n";
let nomeCliente = String(prompt("Informe seu nome: "));
const produto = String(prompt("Qual sabor de casquinha? "));
const preco = 3.00;
let quantidade = Number(prompt("Quantas deseja? "));
const valorTotal = preco * quantidade;
const mensagemFinal = "Obrigado pela preferência!\nVolte sempre!";

console.log(nomeSorveteria);
console.log("PEDIDO:\n");
console.log(`Nome do cliente: ${nomeCliente}`);
console.log(`Sabor da casquinha: ${produto}`);
console.log(`Preço unitário: ${preco}`);
console.log(`Quantidade: ${quantidade}`);
console.log(`Valor total: ${valorTotal}`);
console.log(mensagemFinal);