// a) Função que recebe 2 números e imprime a soma deles
function somarNumeros(num1, num2) {
    const soma = num1 + num2;
    console.log(`A soma de ${num1} e ${num2} é: ${soma}`);
}

// Invocando a função
somarNumeros(5, 10); // A soma de 5 e 10 é: 15
somarNumeros(20, 25); // A soma de 20 e 25 é: 45

// b) Função que recebe 2 números e imprime um booleano que informa se o primeiro número é maior ou igual ao segundo
function compararNumeros(num1, num2) {
    const maiorOuIgual = num1 >= num2;
    console.log(`O número ${num1} é maior ou igual ao número ${num2}: ${maiorOuIgual}`);
}

// Invocando a função
compararNumeros(10, 5); // O número 10 é maior ou igual ao número 5: true
compararNumeros(3, 7); // O número 3 é maior ou igual ao número 7: false

// c) Função que recebe um número e imprime no console um booleano informando se o número é par ou não
function verificarParidade(numero) {
    const ehPar = numero % 2 === 0;
    console.log(`O número ${numero} é par: ${ehPar}`);
}

// Invocando a função
verificarParidade(4); // O número 4 é par: true
verificarParidade(7); // O número 7 é par: false
