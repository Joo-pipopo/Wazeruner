function desafio() {
    var opcoes = ["CORRER TROTANDO", "CORRER NO MÁXIMO", "CORRER PULANDO", "CORRER EM COOPER"];
    alert(opcoes[Math.floor(Math.random() * opcoes.length)]);
}

function concluir(){
    window.location = "../ibiraRotas.html";
}