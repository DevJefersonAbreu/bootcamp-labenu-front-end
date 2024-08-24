// a) Peça ao usuário que insira um número par
const numeroPar = Number(prompt("Por favor, insira um número par:"));

// b) Imprima no console o resto da divisão desse número por 2.
const restoDivisao = numeroPar % 2;
console.log("O resto da divisão do número por 2 é:", restoDivisao);

// c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
// Padrão: O resto da divisão de qualquer número par por 2 é sempre 0.
// Exemplos:
// Se o usuário inserir 4, a saída será 0.
// Se o usuário inserir 10, a saída será 0.
// Se o usuário inserir 22, a saída será 0.

// d) O que acontece no console se o usuário inserir um número ímpar? Escreva em um comentário de código.
// Se o usuário inserir um número ímpar, o resto da divisão por 2 será 1.
// Exemplos:
// Se o usuário inserir 3, a saída será 1.
// Se o usuário inserir 7, a saída será 1.
// Se o usuário inserir 15, a saída será 1.
