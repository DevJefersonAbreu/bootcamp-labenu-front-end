// Solicita ao usuário um número
const numero = parseInt(prompt("Digite um número para ver a tabuada:"), 10);

// Verifica se o valor fornecido é um número válido
if (!isNaN(numero)) {
    console.log("Tabuada do " + numero + ":");

    // Cria um objeto com propriedades numéricas de 1 a 10
    const numeros = {};
    for (let i = 1; i <= 10; i++) {
        numeros[i] = i;
    }

    // Utiliza for...in para iterar sobre as propriedades do objeto
    for (let chave in numeros) {
        const i = numeros[chave];
        console.log(numero * i);
    }
} else {
    console.log("Por favor, digite um número válido.");
}
