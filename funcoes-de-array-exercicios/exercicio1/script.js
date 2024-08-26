// Criando um array com 8 números
const numeros = [2, 4, 6, 8, 10, 12, 14, 16];

// Usando map() para criar um novo array com os números multiplicados por 5
const quintuplos = numeros.map(numero => numero * 5);

// Usando map() para criar um novo array com os números divididos por 2
const metades = numeros.map(numero => numero / 2);

// Exibindo os resultados no console
console.log('Array original:', numeros);
console.log('Array de quíntuplos:', quintuplos);
console.log('Array de metades:', metades);
