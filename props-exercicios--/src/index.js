// src/index.js
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals"; // Importa a função padrão

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);

// Chama a função para logar ou enviar web vitals
reportWebVitals(console.log); // Por exemplo, você pode passar uma função de callback
