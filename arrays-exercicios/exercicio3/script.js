// Arrays originais do exercício 1
const numeros = [42, 7, 19, 85, 3];
const strings = ["maçã", "banana", "laranja", "uva", "melancia"];
const misto = [28, "cachorro", true, "gato", false];

// Criando cópias dos arrays originais usando slice()
const numerosCopia = numeros.slice();
const stringsCopia = strings.slice();
const mistoCopia = misto.slice();

// a) Função para adicionar um item number ao início do primeiro array
function adicionarItemNoInicio(arr) {
    arr.unshift(99); // Adiciona o número 99 ao início do array
    console.log("Array original:", numeros);
    console.log("Array cópia com novo item no início:", arr);
}

// b) Função para remover o último item do segundo array
function removerUltimoItem(arr) {
    arr.pop(); // Remove o último item do array
    console.log("Array original:", strings);
    console.log("Array cópia com o último item removido:", arr);
}

// c) Função para remover o segundo item do terceiro array
function removerSegundoItem(arr) {
    arr.splice(1, 1); // Remove o segundo item (índice 1) do array
    console.log("Array original:", misto);
    console.log("Array cópia com o segundo item removido:", arr);
}

// Chamando as funções com as cópias dos arrays
adicionarItemNoInicio(numerosCopia);
removerUltimoItem(stringsCopia);
removerSegundoItem(mistoCopia);
