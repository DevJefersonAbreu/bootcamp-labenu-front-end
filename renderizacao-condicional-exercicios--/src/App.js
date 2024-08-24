// src/App.js

import TelaCadastroEndereco from './components/TelaCadastroEndereco/TelaCadastroEndereco';

// ...

const renderizaTela = () => {
  switch (telaAtual) {
    case "TelaLogin":
      return <TelaLogin mudarTela={mudarTela} />;
    case "TelaCadastro":
      return <TelaCadastro mudarTela={mudarTela} />;
    case "TelaCadastroEndereco":
      return <TelaCadastroEndereco mudarTela={mudarTela} />;
    case "TelaPrincipal":
      return <TelaPrincipal mudarTela={mudarTela} />;
    default:
      return <p>Tela inválida</p>;
  }
};
