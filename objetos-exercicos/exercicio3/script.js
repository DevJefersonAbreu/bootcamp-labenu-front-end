// Objeto original
const pokemon1 = {
    nome: "Bulbasaur",
    tipo: "Grama",
    nivel: 5
};

// a) Crie uma cópia do objeto, trocando nome e tipo
const pokemon2 = {
    ...pokemon1,
    nome: "Squirtle",
    tipo: "Água"
};

// b) Adicione a propriedade ataques ao objeto original
pokemon1.ataques = [];

// c) Crie um objeto de ataque e adicione ao array ataques
const ataque1 = {
    nome: "Investida",
    dano: 40,
    tipo: "Normal",
    precisao: 100
};
pokemon1.ataques.push(ataque1);

// d) No objeto pokemon2, adicione a propriedade ataques a partir do objeto original
pokemon2.ataques = [...pokemon1.ataques]; // Copia os ataques do pokemon1

// e) Adicione um ataque ao array de ataques do objeto original
const ataque2 = {
    nome: "Folha Navalha",
    dano: 45,
    tipo: "Grama",
    precisao: 100
};
pokemon1.ataques.push(ataque2);

// f) Adicione o ataque "Jato de Água" no array de ataques do objeto pokemon2
const ataque3 = {
    nome: "Jato de Água",
    dano: 40,
    tipo: "Água",
    precisao: 100
};
pokemon2.ataques.push(ataque3);

// g) Imprima ambos os objetos no console
console.log("Pokémon 1:", pokemon1);
console.log("Pokémon 2:", pokemon2);

