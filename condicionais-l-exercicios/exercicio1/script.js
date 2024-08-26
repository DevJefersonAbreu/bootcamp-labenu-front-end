// Função para verificar se o número é par
function verificarNumeroPar(num) {
    if (num % 2 === 0) {
        return "O número é par";
    } else {
        return "O número não é par";
    }
}

// Testando a função com um número
const numeroTeste = 4; // Você pode mudar este valor para testar outros números
const resultado = verificarNumeroPar(numeroTeste);
console.log(resultado);
