// Função para verificar a nacionalidade
function verificarNacionalidade() {
    // Solicita ao usuário que informe sua nacionalidade
    const nacionalidade = prompt("Escreva aqui sua nacionalidade.").toLowerCase();

    // Verifica a nacionalidade e imprime a mensagem apropriada
    if (nacionalidade === "brasileira") {
        console.log("A nacionalidade é brasileira");
    } else if (nacionalidade === "argentina") {
        console.log("A nacionalidade é argentina");
    } else if (nacionalidade === "uruguaia") {
        console.log("A nacionalidade é uruguaia");
    } else if (nacionalidade === "chilena") {
        console.log("A nacionalidade é chilena");
    } else if (nacionalidade === "colombiana") {
        console.log("A nacionalidade é colombiana");
    } else {
        console.log("Nacionalidade não encontrada");
    }
}

// Chama a função para executar o código
verificarNacionalidade();
