// Inicializa a variável para guardar o valor total
let conta = 0;

// Laço while para continuar perguntando se a pessoa deseja comer mais coxinhas
while (true) {
    // Recebe a resposta do usuário
    const resposta = prompt("Deseja comer mais coxinhas? (S para sim, N para não)").toUpperCase();

    // Verifica a resposta
    if (resposta === "S") {
        // Adiciona R$2,50 ao valor total da conta
        conta += 2.50;
    } else if (resposta === "N") {
        // Imprime o valor total da conta e encerra o laço
        console.log("O valor total da conta é: R$" + conta.toFixed(2));
        break;
    } else {
        // Caso a resposta não seja válida, exibe uma mensagem de erro
        console.log("Resposta inválida. Por favor, responda com 'S' ou 'N'.");
    }
}
