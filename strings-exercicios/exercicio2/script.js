function processarString(minhaString) {
    // a) Remover o excesso de espaços no final da string
    const stringSemEspacos = minhaString.trim();

    // b) Imprimir a quantidade de caracteres antes e depois da remoção dos espaços
    console.log(`Quantidade de caracteres antes: ${minhaString.length}`);
    console.log(`Quantidade de caracteres depois: ${stringSemEspacos.length}`);

    // c) Substituir os traços ________ pela palavra “sticioso”
    const stringFinal = stringSemEspacos.replace("________", "sticioso");

    // Imprimir o resultado final
    console.log(`String final: ${stringFinal}`);
}

// Exemplo de uso da função
const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
processarString(minhaString);
