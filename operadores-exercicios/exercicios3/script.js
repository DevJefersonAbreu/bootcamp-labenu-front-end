// a) 5 é maior que 20 e também é menor que 2
const operacaoA = 5 > 20 && 5 < 2;
console.log("5 é maior que 20 e também é menor que 2:", operacaoA); // false

// b) 5 é igual a 5 ou é igual a “5”
const operacaoB = 5 === 5 || 5 === "5";
console.log("5 é igual a 5 ou é igual a '5':", operacaoB); // true

// c) negação de (vinte é maior que cinquenta)
const operacaoC = !(20 > 50);
console.log("negação de (vinte é maior que cinquenta):", operacaoC); // true

// d) negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta)
const operacaoD = !(20 > 50 || 50 > 60);
console.log("negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta):", operacaoD); // true
