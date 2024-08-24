// src/components/TelaCadastroEndereco/TelaCadastroEndereco.js

import React, { useState } from 'react';
import { FormContainer, Form, Input, ConfirmButton } from './styled';

function TelaCadastroEndereco(props) {
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [telefone, setTelefone] = useState("");

  const handleConfirm = () => {
    const dadosEndereco = {
      endereco,
      numero,
      complemento,
      telefone
    };
    console.log(dadosEndereco);
    props.mudarTela("TelaPrincipal");
  };

  return (
    <FormContainer>
      <h1>Cadastro de Endereço</h1>
      <Form>
        <Input
          placeholder="Endereço"
          value={endereco}
          onChange={(e) => setEndereco(e.target.value)}
        />
        <Input
          placeholder="Número"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
        />
        <Input
          placeholder="Complemento"
          value={complemento}
          onChange={(e) => setComplemento(e.target.value)}
        />
        <Input
          placeholder="Telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />
        <ConfirmButton onClick={handleConfirm}>Confirmar</ConfirmButton>
      </Form>
    </FormContainer>
  );
}

export default TelaCadastroEndereco;


// src/components/TelaCadastro/TelaCadastro.js

const cadastrar = () => {
    props.mudarTela("TelaCadastroEndereco");
  };
  