// Função para verificar as condições
function verificarSituacao(idade, terminouEnsinoMedio, cursandoFaculdade) {
    // Verifica se a pessoa tem 18 anos ou mais
    if (idade >= 18) {
        console.log("A pessoa é maior de idade");
    } else {
        console.log("A pessoa é menor de idade");
    }

    // Verifica se a pessoa terminou o ensino médio
    if (terminouEnsinoMedio) {
        console.log("A pessoa terminou o ensino médio");
    } else {
        console.log("A pessoa não terminou o ensino médio");
    }

    // Verifica se a pessoa NÃO está cursando alguma faculdade
    if (!cursandoFaculdade) {
        console.log("A pessoa não está cursando nenhuma faculdade");
    } else {
        console.log("A pessoa está cursando alguma faculdade");
    }
}

// Testando a função com alguns valores
const idadeTeste = 20; // Você pode mudar este valor para testar diferentes idades
const terminouEnsinoMedioTeste = true; // Altere para false para testar outro cenário
const cursandoFaculdadeTeste = false; // Altere para true para testar outro cenário

verificarSituacao(idadeTeste, terminouEnsinoMedioTeste, cursandoFaculdadeTeste);
