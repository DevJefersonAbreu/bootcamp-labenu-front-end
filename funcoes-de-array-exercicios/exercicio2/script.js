// Exemplo do array de produtos
const produtos = [
    { nome: 'Detergente', preco: 2.50, categoria: 'limpeza' },
    { nome: 'Sabão em Pó', preco: 8.00, categoria: 'limpeza' },
    { nome: 'Shampoo', preco: 15.00, categoria: 'higiene' },
    { nome: 'Condicionador', preco: 12.00, categoria: 'higiene' },
    { nome: 'Esponja', preco: 3.50, categoria: 'limpeza' },
    { nome: 'Desinfetante', preco: 5.00, categoria: 'limpeza' }
];

// Filtrando o array para retornar um novo array contendo apenas os nomes dos produtos da categoria "limpeza"
const nomesLimpeza = produtos
    .filter(produto => produto.categoria === 'limpeza')
    .map(produto => produto.nome);

// Exibindo o resultado no console
console.log('Produtos da categoria limpeza:', nomesLimpeza);
