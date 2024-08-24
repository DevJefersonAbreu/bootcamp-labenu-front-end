function PaginaDoCartao() {
    const [nome, setNome] = useState("");
    const [numero, setNumero] = useState("");
    const [validade, setValidade] = useState("");
    const [cvc, setCvc] = useState("");
    const [pagamento, setPagamento] = useState("");

    return (
        <LayoutDaPagina>
            <Cartao 
                nome={nome}
                numero={numero}
                validade={validade}
                cvc={cvc}
                pagamento={pagamento}
            />
            <Formulario 
                nome={nome}
                setNome={setNome}
                numero={numero}
                setNumero={setNumero}
                validade={validade}
                setValidade={setValidade}
                cvc={cvc}
                setCvc={setCvc}
                pagamento={pagamento}
                setPagamento={setPagamento}
            />
        </LayoutDaPagina>
    );
}
