// Define o array com os gols dos jogadores por temporada
const array = [
    [27, 4, 20, 13, 14], // Gols do Jogador 1
    [11, 15, 12, 8, 9],  // Gols do Jogador 2
    [5, 5, 12, 16, 4],   // Gols do Jogador 3
    [20, 33, 11, 12, 19],// Gols do Jogador 4
    [3, 3, 4, 5, 10]     // Gols do Jogador 5
];

// Laço para iterar pelos jogadores
for (let jogador = 0; jogador < array.length; jogador++) {
    console.log(`Jogador ${jogador + 1}:`);

    // Laço para iterar pelas temporadas do jogador
    for (let temporada = 0; temporada < array[jogador].length; temporada++) {
        console.log(`Temporada ${temporada + 1}: ${array[jogador][temporada]} gols`);
    }

    console.log(); // Linha em branco para separar os jogadores
}
