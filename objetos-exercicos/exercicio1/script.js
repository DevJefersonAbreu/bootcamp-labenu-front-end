// a) Criação dos objetos que representam as frutas do sacolão
const fruta1 = {
    nome: "Banana",
    preco: 1.99,
    disponibilidade: true
};

const fruta2 = {
    nome: "Maçã",
    preco: 2.49,
    disponibilidade: false
};

const fruta3 = {
    nome: "Laranja",
    preco: 1.29,
    disponibilidade: true
};

// b) Criação do array sacolao e adição dos objetos ao array utilizando push()
const sacolao = [];
sacolao.push(fruta1, fruta2, fruta3);

// c) Imprimindo o array sacolao para verificar se contém os três objetos
console.log(sacolao);
