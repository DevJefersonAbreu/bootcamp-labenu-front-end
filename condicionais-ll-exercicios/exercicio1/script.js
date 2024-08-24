// Função para verificar divisibilidade
function verificarDivisibilidade() {
    // Solicita um número ao usuário
    const numero = parseInt(prompt("Digite um número:"));

    // a) Utilizando ifs aninhados
    if (numero % 2 === 0) {
        if (numero % 3 === 0) {
            console.log("O número é divisível por 2 e por 3.");
        } else {
            console.log("O número é divisível por 2, mas não por 3.");
        }
    } else {
        if (numero % 3 === 0) {
            console.log("O número não é divisível por 2, mas é divisível por 3.");
        } else {
            console.log("O número não é divisível por 2 nem por 3.");
        }
    }

    // b) Utilizando um operador lógico para unir duas operações relacionais
    // Divisível por 2 ou por 3
    if (numero % 2 === 0 || numero % 3 === 0) {
        console.log("O número é divisível por 2 ou por 3.");
    }

    // Divisível por 2 e por 3
    if (numero % 2 === 0 && numero % 3 === 0) {
        console.log("O número é divisível por 2 e por 3.");
    }
}

// Chama a função para executar o código
verificarDivisibilidade();
