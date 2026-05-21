# Aula - 03

Apresetação de Estruturas Condicionais com JavaScript.

---

## Material

[Condicionais](https://sparkling-link-662.notion.site/Estruturas-Condicionais-32716837961280fda789f48ab1ed3a85)

[Exercícios](https://sparkling-link-662.notion.site/Exerc-cios-de-Condicionais-32716837961280bb9309dfe403263767)

---

## Exemplos

#### Condicional Aninhada
Uma condição dentro da outra

```js
const nota = 5;

if(nota >= 7){
    if(nota == 10){
        console.log("Aprovado com exito!");
    }
    else{
        console.log("Aprovado!");
    }
}
else{
    console.log("Reprovado!");
}
```

#### Condicional

```js
let dispositivo = prompt("Você está usando: celular, tablet ou computador? ").toLowerCase();

if(dispositivo == "celular" || dispositivo == "tablet"){
    console.log("Modo mobile ativado!");
}
else if(dispositivo == "computador"){
    console.log("Modo desktop ativado!");
}
else{
    console.log("Dispositivo desconhecido.");
}
```

#### SWITCH/CASE

```js
let tema = prompt("Digite um tema: claro, escuro, azul ou digite sair").toLowerCase();

switch(tema){
    case "claro":
        console.log("Tema claro ativado!");
        document.body.style.backgroundColor = "#ecececff";
        break;
    case "escuro":
        console.log("Tema escuro ativado!");
        document.body.style.backgroundColor = "#222222ff";
        break;
    case "azul":
        console.log("Tema azul ativado!");
        document.body.style.backgroundColor = "#3d3d8dff";
        break;
    case "sair":
        console.log("Saindo...")
        break;
    default:
        console.log("Tema inválido!");
        break;    
}
```