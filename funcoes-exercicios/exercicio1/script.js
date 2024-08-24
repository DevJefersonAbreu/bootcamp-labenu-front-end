/// a) Declarar uma função que imprima Olá, [SEU NOME]!
function saudar() {
    console.log("Olá, Fulano!");
}

// Chamar a função
saudar();

// b) Declarar uma função que receba um número como parâmetro e imprima no console a tabuada de 1 a 10 dele
function imprimirTabuada(numero) {
    console.log(`Tabuada de ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

// Chamar a função com números diferentes
imprimirTabuada(2);
imprimirTabuada(5);
imprimirTabuada(7);



// c) Reescrever as funções utilizando expressões de função ou arrow functions

// Usando expressão de função
const saudarExpressao = function() {
    console.log("Olá, Fulano!");
};

// Chamar a função
saudarExpressao();

// Usando arrow function
const imprimirTabuadaArrow = (numero) => {
    console.log(`Tabuada de ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
};

// Chamar a função com números diferentes
imprimirTabuadaArrow(2);
imprimirTabuadaArrow(5);
imprimirTabuadaArrow(7);
