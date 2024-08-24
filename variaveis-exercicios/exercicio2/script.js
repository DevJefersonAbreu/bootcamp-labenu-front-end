// a) Crie um programa que faça 3 perguntas para o usuário através do prompt. Armazene a resposta de cada pergunta em uma variável.
const respost1 = prompt("Você está usando uma roupa azul hoje?");
const respost2 = prompt("Você tomou café da manhã hoje?");
const respost3 = prompt("Você fez exercício físico hoje?");

// b) Imprima no console todas as respostas.
console.log(respost1);
console.log(respost2);
console.log(respost3);

// c) Altere seu programa para que os textos das perguntas sejam armazenados em 3 variáveis diferentes.
const pergunta1 = "Você está usando uma roupa azul hoje?";
const pergunta2 = "Você tomou café da manhã hoje?";
const pergunta3 = "Você fez exercício físico hoje?";

// d) Troque o texto do seu prompt pelas variáveis que contêm as perguntas.
const resposta1 = prompt(pergunta1);
const resposta2 = prompt(pergunta2);
const resposta3 = prompt(pergunta3);

// e) Altere o console para imprimir a pergunta e a resposta.
console.log(pergunta1, "-", resposta1);
console.log(pergunta2, "-", resposta2);
console.log(pergunta3, "-", resposta3);
