const inputTarefa = document.getElementById("input_tarefa");
const botaoAdicionar = document.getElementById("botao_adicionar");
const listaTarefas = document.getElementById("lista_tarefas");

// criando uma lista vazia
let tarefas = [];

// função para salvar tarefas no loscal storage
function salvarTarefas() {
    /*
        localStorage -> amazenamento local do navegador
        setItem -> salva no armazenamento o conteúdo recebido
        JSON.stringify(tarefas) -> pega a lista de tarefas, converte para texto
    */
    localStorage.setItem("tarefas", JSON.stringify(tarefas));  
}

// função para mostrar tarefas na tela
function mostrarTarefas() {
    listaTarefas.innerHTML = "";

    for (let i = 0; i < tarefas.length; i++) {
        // para cada elemento cria um li
        const li = document.createElement("li");
        // cada vez que criar o li, passa o valor que está na lista de tarefas na posição i
        li.innerText = tarefas[i];
    }
}

botaoAdicionar.addEventListener("click", () => {

})