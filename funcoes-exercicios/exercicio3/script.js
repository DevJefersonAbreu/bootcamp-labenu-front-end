// a) Funções para operações básicas
function somar(num1, num2) {
    return num1 + num2;
}

function subtrair(num1, num2) {
    return num1 - num2;
}

function multiplicar(num1, num2) {
    return num1 * num2;
}

function dividir(num1, num2) {
    if (num2 === 0) {
        return "Divisão por zero não é permitida!";
    }
    return num1 / num2;
}

// b) Receber dois números do usuário e armazená-los em variáveis
const numero1 = parseFloat(prompt("Digite o primeiro número:"));
const numero2 = parseFloat(prompt("Digite o segundo número:"));

// c) Invocar cada uma das 4 funções com os números recebidos do usuário
const resultadoSoma = somar(numero1, numero2);
const resultadoSubtracao = subtrair(numero1, numero2);
const resultadoMultiplicacao = multiplicar(numero1, numero2);
const resultadoDivisao = dividir(numero1, numero2);

// d) Imprimir os resultados das operações no console
console.log(`A soma de ${numero1} e ${numero2} é: ${resultadoSoma}`);
console.log(`A subtração de ${numero1} e ${numero2} é: ${resultadoSubtracao}`);
console.log(`A multiplicação de ${numero1} e ${numero2} é: ${resultadoMultiplicacao}`);
console.log(`A divisão de ${numero1} e ${numero2} é: ${resultadoDivisao}`);
