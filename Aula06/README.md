# Aula - 06

Funções no JavaScript.

---

## Exemplos

---

### Funções nativas

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