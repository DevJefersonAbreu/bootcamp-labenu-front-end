// a) Criando a constante com a frase
const frase = 'Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"';

// b) Função para trocar as cores e imprimir a nova string
function alterarFrase(frase) {
    // Trocar "verde" por "rosa" e "azul" por "laranja"
    let novaFrase = frase.replace("verde", "rosa").replace("azul", "laranja");

    // c) Verificar se a nova string contém "verde" e "laranja"
    const contemVerde = novaFrase.includes("verde");
    const contemLaranja = novaFrase.includes("laranja");

    console.log(novaFrase);
    console.log(`Contém "verde"? ${contemVerde}`);
    console.log(`Contém "laranja"? ${contemLaranja}`);

    // EXTRA: Deixar "mas não deixe o gato sair" em letras maiúsculas
    novaFrase = novaFrase.replace("mas não deixe o gato sair", "MAS NÃO DEIXE O GATO SAIR");

    console.log(`Frase final: ${novaFrase}`);
}

// Chamar a função com a frase original
alterarFrase(frase);
