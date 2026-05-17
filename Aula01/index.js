function mudarCor(){
    let cores = ["#FF5733", "#3357FF", "#33FF57", "#FF33A1"]; // Array(Lista) de cores

    let corAleatoria = cores[Math.floor(Math.random() * cores.length)]; // Gera um número aleatório entre 0 e 1, multiplica pelo tamanho do array cores(4) e pega o resultado inteiro

    document.body.style.backgroundColor = corAleatoria; // background vai receber corAleatoria, fazendo a cor da página mudar
}

function mudar(){
    const preto = "#000000";
    const branco = "#ffffff";
    const verde = "#00ff00";

    document.getElementById("corpo").style.backgroundColor = preto;
    document.getElementById("fonte1").style.color = branco;
    document.getElementById("fonte3").style.color = branco;

    let fonte2 = document.getElementById("fonte2");
    fonte2.style.backgroundColor = verde;
    fonte2.style.color = preto;
}