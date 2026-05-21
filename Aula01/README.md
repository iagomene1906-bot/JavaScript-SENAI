# Aula - 01

Apresetação ao HTML e CSS com JavaScript.

---

## Material

[W3Schools](https://www.w3schools.com/js/default.asp)

---

## Exemplos

```js
    function mudarCor(){
    let cores = ["#FF5733", "#3357FF", "#33FF57", "#FF33A1"]; // Array(Lista) de cores

    let corAleatoria = cores[Math.floor(Math.random() * cores.length)]; // Gera um número aleatório entre 0 e 1, multiplica pelo tamanho do array cores(4) e pega o resultado inteiro

    document.body.style.backgroundColor = corAleatoria; // background vai receber corAleatoria, fazendo a cor da página mudar
    }
```