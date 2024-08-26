// a) Declare uma variável para armazenar um nome, sem atribuir um valor a essa variável.
let nome;

// b) Declare uma variável para armazenar uma idade, sem atribuir um valor a essa variável.
let idade;

// c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando typeof.
console.log(typeof nome); // undefined
console.log(typeof idade); // undefined

// d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.
// Resposta: Esse tipo foi impresso porque as variáveis foram declaradas mas não foram inicializadas com nenhum valor.
// Em JavaScript, quando uma variável é declarada sem um valor, seu tipo é "undefined".

// e) Depois, disso, atualize o código para perguntar ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.
nome = prompt("Por favor, digite seu nome:");
idade = prompt("Por favor, digite sua idade:");

// f) Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.
console.log(typeof nome); // string
console.log(typeof idade); // string
// Resposta: Notei que o tipo das variáveis mudou para "string", porque os valores recebidos do prompt são sempre do tipo string, mesmo que o usuário digite um número.

// g) Para finalizar, imprima na tela a mensagem: "Olá, nome, você tem idade anos". Lembre-se: nome e idade são os valores inseridos pelo usuário.
console.log("Olá,", nome, ", você tem", idade, "anos");