// Arrays do exercício 1
const numeros = [42, 7, 19, 85, 3];
const strings = ["maçã", "banana", "laranja", "uva", "melancia"];
const misto = [28, "cachorro", true, "gato", false];

// a) Função que imprime a quantidade de itens de cada array
function imprimirQuantidadeDeItens(arr1, arr2, arr3) {
    console.log("Quantidade de itens no primeiro array:", arr1.length);
    console.log("Quantidade de itens no segundo array:", arr2.length);
    console.log("Quantidade de itens no terceiro array:", arr3.length);
}

// b) Função que imprime itens específicos e verifica inclusões
function imprimirItensEVerificar(arr1, arr2, arr3) {
    // Imprimir o primeiro item do primeiro array, o segundo do segundo, e o terceiro do terceiro
    console.log("Primeiro item do primeiro array:", arr1[0]);
    console.log("Segundo item do segundo array:", arr2[1]);
    console.log("Terceiro item do terceiro array:", arr3[2]);

    // Verificar se um item está incluído no primeiro array e no terceiro array
    const itemNoPrimeiroArray = arr1.includes(42); // Exemplo: verificar se o número 42 está presente
    const itemNoTerceiroArray = arr3.includes("banana"); // Exemplo: verificar se "banana" está presente

    console.log("42 está no primeiro array?", itemNoPrimeiroArray);
    console.log('"banana" está no terceiro array?', itemNoTerceiroArray);
}

// Chamando as funções com os arrays
imprimirQuantidadeDeItens(numeros, strings, misto);
imprimirItensEVerificar(numeros, strings, misto);

