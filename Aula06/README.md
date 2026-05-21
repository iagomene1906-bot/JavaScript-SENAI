# Aula - 06

Funções no JavaScript.

---

## Material

[Funções Importantes do JavaScript](https://sparkling-link-662.notion.site/Fun-es-Importantes-do-JavaScript-3291683796128089acfbef50c96040df)
[Atividade](https://drive.google.com/file/d/1zACVN2XqqmqFq5V1AswDCT1X7q2F1ZDq/view?pli=1)
[Exercícios](https://sparkling-link-662.notion.site/Exerc-cios-Fun-es-329168379612803fb7a1c4709ea0955d)

---

## Funções nativas

#### MAP
Percorre uma lista e cria uma nova lista com base em uma condição.

*Funcion padrão*

```js
let numeros = [1, 2, 3, 4];

let numerosDobrados = numeros.map(function(numero){
    return numero * 2;
});

console.log(numerosDobrados);
```

*Arrow Function*

```js
let numerosDobradosArrow = numeros.map(numero => numero * 2);
console.log(numerosDobradosArrow);

// Outro exemplo
let teste = numeros.map(numero => {
    let resultado = numero * 2;
    return resultado;
});

console.log(teste);
```

#### FILTER
Filtra os elementos de uma lista com base em uma condição.

```js
let numeros = [5, 10, 15, 20];

let maior10 = numeros.filter(numero => numero > 10);
console.log(maior10); // [15, 20]
```

#### REDUCE
Reduz os valores de um array para um único valor

```js
let numeros = [1, 2, 3, 4];

// acumulador
// variável auxiliar
// 0 -> valor inicial do acumulador
let soma = numeros.reduce((acumulador, auxiliar) => acumulador + auxiliar, 0);
console.log(soma);
```

#### FIND
Retorna o primeiro elemento que atende a uma condição.

```js
let produtos = [
    {id: 1, nome: "Teclado", preco: 50 },
    {id: 2, nome: "Mouse", preco: 30 },
    {id: 2, nome: "Headset", preco: 200 }
];

let item = produtos.find(produto => produto.id === 2);
console.log(item);
```

#### SPLIT
Divide uma string em partes, transformando em uma lista.

```js
let frase = "JS é muito bom!";

// criando um array de palavras usando split
let palavras = frase.split(" ");
console.log(palavras);
```

#### TRIM
Remove espaços no inicio e final de uma string.

```js
let nome = "    João    ";
let nome2 = "   João    ";
let nomeLimpo = nome.trim();

console.log(nomeLimpo);
console.log(nome2);
```

#### INCLUDES
Verifica se existe um valor dentro de uma lista ou string.

```js
let frutas = ["maça", "banana"];

let frutaExiste = frutas.includes("banana"); // booleano
console.log(frutaExiste); // true (verdadeiro)
```

#### toLowerCase/toUpperCase
toLowerCase -> Transforma o texto em minúsculo.
toUpperCase -> Transforma o texto em maiúsculo.

```js
let nome = "IAGO";
let cargo = "estudante";

console.log(nome.toLowerCase()); // iago
console.log(cargo.toUpperCase()); // ESTUDANTE
```

#### SOME
Verifica se pelo menos um item da lista atende a condição.

```js
let numeros = [1, 3, 5, 8];

let temPar = numeros.some(numero => numero % 2 === 0); // true ou false
console.log(temPar); // true
```

#### EVERY
Verifica se TODOS os elementos da lista atendem a uma condição.

```js
let todosPares = numeros.every(numero => numero % 2 === 0);
console.log(todosPares); // false
```

#### SORT
Ordena os elementos de uma lista.

```js
let numeros = [3, 10, 5, 2, 4];
let letras = ["c", "a", "x", "h"];

// ordenando letras
letras.sort();
console.log(letras);

// ordenando números
numeros.sort((a, b) => a - b);
console.log(numeros);
```

#### REVERSE
Inverte a ordem de um array.

```js
numeros.reverse();
console.log(numeros);
```

#### JOIN
Junta os elementos de um array em uma string.

```js
let plavaras = ["JS", "é", "muito", "bom!"];

let frase = palavras.join(" ");
console.log(frase);
```

#### PUSH/POP
PUSH -> Adicionar elementos no final do array.
POP -> Remover elementos no final do array.

```js
let lista = ["A", "B"];

lista.push("C", "D"); // Adicionando
lista.pop(); // Removendo o ultimo elemento - "D"

console.log(lista);
```

#### SHIFT/UNSHIFT
SHIFT ->  Remover elementos do inicio do array.
UNSHIFT -> Adicionar elementos o inicio do array.

```js
let lista = ["B", "C"];

lista.unshift("A"); // Adiciona
console.log(lista);

lista.shift(); // Remove
console.log(lista);
```

#### SLICE
Cria uma cópia de uma parte da lista.

```js
let numeros = [1, 2, 3, 4];
let copia = numeros.slice(1, 3); // 1 e 3 são posições do array

console.log(copia);
```

#### SPLICE
Remove ou adiciona elementos em qualquer posição.

```js
let numeros = [1, 2, 3, 4];

numeros.splice(1, 1); // Vai retornar 1, 3, 4
console.log(numeros);

let frutas = ["Maçã", "Uva", "Laranja", "Manga"];

frutasR.splice(0, 3, "Limão", "Kiwi"); // Vai retornar "Limão", "Kiwi", "Manga"
console.log(frutasR);

let frutas = ["Maçã", "Uva", "Laranja", "Manga"];

frutas.splice(2, 0, "Limão", "Kiwi"); // Vai adicionar esses elementos na segunda posição, empurrando o elemento que estava nela para frente
console.log(frutas);
```

#### REPLACE
Substitui uma parte da string

```js
let texto = "Olá, mundo!";

// replace(valorProcurado, valorSubstituto)
let novoTexto = texto.replace("mundo", "visitante");
console.log(novoTexto);
```