const campoCeop = document.getElementById("cep");
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
    const cep = campoCeop.value.replace(/\D/g, "").trim()

    if (cep.length !== 8) {
        alert("CEP inválido!");
        limparCampos();
        return;
    }

    const url = `https://viacep.com.br/ws/${cep}/json/`;

    // faz a requisição HTTP para a URL da API
    // busca as informações dentro do ViaCEP
    fetch(url)
    .then(response => response.json()) // quanda a resposta chega, converte para json
    .then(dados => {
        // verifica se a API retornou um erro
        if (dados.erro) {
            alert("CEP não encontrado");
            limparCampos();
            return;
        }

        preencherCampos(dados);
    })

    .catch(() => {
        alert("Erro ao buscar CEP.");
    })
    
}

botaoBuscar.addEventListener("click", buscarCep);