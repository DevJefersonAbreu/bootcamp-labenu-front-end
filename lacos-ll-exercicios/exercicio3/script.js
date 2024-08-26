// Define o array com os 5 maiores países
const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"];

// Inicializa o contador para o ranking
let ranking = 1;

// Utiliza o for...of para percorrer o array
for (const pais of maioresPaises) {
    console.log(`${ranking} - ${pais}`);
    ranking++;
}
