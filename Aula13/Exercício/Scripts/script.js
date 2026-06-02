const produtosMockados = {
    "Teclado Dell": {
        categoria: "Teclado",
        valor: 99.90
    },
    "Teclado Redragon": {
        categoria: "Teclado",
        valor: 159.90
    },
    "Mouse Razer": {
        categoria: "Mouse",
        valor: 299.90
    },
    "Monitor AOC": {
        categoria: "Monitor",
        valor: 1479.90
    },
    "Monitor Samsung": {
        categoria: "Monitor",
        valor: 1299.90
    },
    "Headset Havit": {
        categoria: "Headset",
        valor: 169.90
    },
    "Mouse Redragon": {
        categoria: "Mouse",
        valor: 129.90
    },
    "Teclado Multilaser": {
        categoria: "Teclado",
        valor: 99.90
    },
    "Monitor Dell": {
        categoria: "Monitor",
        valor: 1699.90
    }
}

const campoNome = document.getElementById("nome");
const campoCategoria = document.getElementById("categoria");
const campoValor = document.getElementById("valor");
const botaoBuscar = document.getElementById("botao_buscar");

function preencherCampos(dados) {
    campoCategoria.value = dados.categoria;
    campoValor.value = dados.valor;
}

function limparCampo() {
    campoCategoria.value = "";
    campoValor.value = "";
}

function buscarProduto() {
    const nome = campo.value.replace(/\D/g, "").trim()

    if (nome.length !== 8) {
        alert("Nome inválido!");
        limparCampos();
        return;
    }

    const dadosProduto = produtosMockados[nome];

    if(!dadosProduto) {
        alert("Produto não encontrado na base de dados.");
        limparCampos();
        return;
    }

    preencherCampos(dadosProduto);
}

botaoBuscar.addEventListener("click", buscarProduto);