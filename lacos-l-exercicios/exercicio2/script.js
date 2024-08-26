// Solicita ao usuário um número
const numero = parseInt(prompt("Digite um número para ver a tabuada:"), 10);

// Verifica se o valor fornecido é um número válido
if (!isNaN(numero)) {
    console.log("Tabuada do " + numero + ":");
    
    // Laço para calcular e imprimir a tabuada de 1 a 10
    for (let i = 1; i <= 10; i++) {
        console.log(numero * i);
    }
} else {
    console.log("Por favor, digite um número válido.");
}
