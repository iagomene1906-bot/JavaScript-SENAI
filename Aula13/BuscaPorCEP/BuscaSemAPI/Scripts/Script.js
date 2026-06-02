const cepMockados = {
    "01001000": {
        logradouro: "Rua Cisplatina",
        bairro: "Vila Nova",
        localidade: "São Paulo",
        uf: "SP"
    },
    "20040002": {
        logradouro: "Rua São Paulo",
        bairro: "Parque das Fontes",
        localidade: "São Paulo",
        uf: "SP"
    },
    "30140071": {
        logradouro: "Rua Amazonas",
        bairro: "Santa Luzia",
        localidade: "São Paulo",
        uf: "SP"
    },
    "01001000": {
        logradouro: "Rua Morumbi",
        bairro: "Morumbi",
        localidade: "São Paulo",
        uf: "SP"
    }

}

const campoCep = document.getElementById("cep");
const botaoBuscar = document.getElementById("botao_buscar");
const campoRua = document.getElementById("rua");
const campoBairro = document.getElementById("bairro");
const campoCidade = document.getElementById("cidade");
const campoEstado = document.getElementById("estado");

function preencherCampos(dados) {
    campoRua.value = dados.logradouro;
    campoBairro.value = dados.bairro;
    campoCidade.value = dados.localidade;
    campoEstado.value = dados.uf;
}

function limparCampo() {
    campoRua.value = "";
    campoBairro.value = "";
    campoCidade.value = "";
    campoEstado.value = "";
}

function buscarCep() {
    // pega o valor digitado no campo e remove tudo que não for numero (/D)
    // \D é o oposto de /d (representa os digitos numéricos)
    // g significa global, quer dizer que estamos aplicando a remoção em todos os caracteres, não só no primeiro
    // trim() remove espaços em branco no início e fim da entrada 
    const cep = campoCep.value.replace(/\D/g, "").trim()

    if (cep.length !== 8) {
        alert("CEP inválido!");
        limparCampos();
        return;
    }

    const dadosCep = cepMockados[cep];

    if(!dadosCep) {
        alert("CEP não encontrado na base de dados.");
        limparCampos();
        return;
    }

    preencherCampos(dadosCep);
}

botaoBuscar.addEventListener("click", buscarCep);