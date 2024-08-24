// Objeto de exemplo
const usuario = {
    nome: 'Astrodev',
    profissao: 'Dev das Estrelas',
    username: 'astrodev_labenu',
    senha: 'melhordetodos'
};

// Função 1: Altera as propriedades do objeto para CAIXA ALTA
function converterParaCaixaAlta(obj) {
    const novoObjeto = {};
    for (let chave in obj) {
        novoObjeto[chave] = obj[chave].toUpperCase();
    }
    return novoObjeto;
}

// Função 2: Retorna os valores do objeto como texto corrido
function valoresComoTexto(obj) {
    let textoCorrido = '';
    for (let chave in obj) {
        textoCorrido += `O valor da propriedade ${chave} é ${obj[chave]}. `;
    }
    return textoCorrido.trim();
}

// Função 3: Recebe um objeto e uma callback, e imprime o valor retornado
function processarObjeto(obj, callback) {
    const resultado = callback(obj);
    console.log(resultado);
}

// Chamando a função 3 com a função 1 como callback
processarObjeto(usuario, converterParaCaixaAlta);

// Chamando a função 3 com a função 2 como callback
processarObjeto(usuario, valoresComoTexto);
