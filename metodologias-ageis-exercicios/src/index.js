// EXERCÍCIO 01
export function anoBissexto(ano) {
    if (ano < 0 || !Number.isInteger(ano)) {
        return "INVALID";
    }
    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
        return "TRUE";
    }
    return "FALSE";
}

// EXERCÍCIO 02
export function pedraPapelTesoura() {
    const escolhas = ["PEDRA", "PAPEL", "TESOURA"];
    const escolhaAleatoria = Math.floor(Math.random() * escolhas.length);
    return escolhas[escolhaAleatoria];
}

// EXERCÍCIO 03
export function checkNumeroPrimo(numero) {
    if (numero <= 1 || !Number.isInteger(numero)) {
        return "INVALID";
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return "FALSE";
        }
    }
    return "TRUE";
}
