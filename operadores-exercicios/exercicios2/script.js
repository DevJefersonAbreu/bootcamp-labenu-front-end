// Pergunte ao usuário dois números
const numero1 = Number(prompt("Por favor, insira o primeiro número:"));
const numero2 = Number(prompt("Por favor, insira o segundo número:"));

// Faça as operações e imprima no console as mensagens seguidas por true ou false

// Verifique se o primeiro número é maior que o segundo
const maiorQue = numero1 > numero2;
console.log("O primeiro número é maior que o segundo?", maiorQue);

// Verifique se o primeiro número é igual ao segundo
const igualA = numero1 === numero2;
console.log("O primeiro número é igual ao segundo?", igualA);

// Verifique se o primeiro número é divisível pelo segundo
const divisivelPeloSegundo = numero1 % numero2 === 0;
console.log("O primeiro número é divisível pelo segundo?", divisivelPeloSegundo);

// Verifique se o segundo número é divisível pelo primeiro
const divisivelPeloPrimeiro = numero2 % numero1 === 0;
console.log("O segundo número é divisível pelo primeiro?", divisivelPeloPrimeiro);
