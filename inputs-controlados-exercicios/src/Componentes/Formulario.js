import React from 'react';

function Formulario({ nome, setNome, numero, setNumero, validade, setValidade, cvc, setCvc, pagamento, setPagamento }) {
    return (
        <form>
            <input
                type="text"
                placeholder="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />
            <input
                type="text"
                placeholder="Número do Cartão"
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
            />
            <input
                type="text"
                placeholder="Validade"
                value={validade}
                onChange={(e) => setValidade(e.target.value)}
            />
            <input
                type="text"
                placeholder="CVC"
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
            />
            <input
                type="text"
                placeholder="Forma de Pagamento"
                value={pagamento}
                onChange={(e) => setPagamento(e.target.value)}
            />
            <button type="submit">Cadastrar</button>
        </form>
    );
}

export default Formulario;



function Formulario({ nome, setNome, numero, setNumero, validade, setValidade, cvc, setCvc, pagamento, setPagamento }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        setNome("");
        setNumero("");
        setValidade("");
        setCvc("");
        setPagamento("");
        alert("Seu cartão foi cadastrado com sucesso!");
    }

    return (
        <form onSubmit={handleSubmit}>
            {/* Input fields remain the same */}
            <button type="submit">Cadastrar</button>
        </form>
    );
}
