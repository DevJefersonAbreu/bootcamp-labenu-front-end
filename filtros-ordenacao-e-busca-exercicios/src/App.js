import React from "react";
import CardVideo from "./Cardvideo";
import InfosUsuario from "./InfosUsuario";
import "./styles.css";

export default function App() {
  return (
    <div>
      <div className="tela-inteira">
        <header>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Pesquisar" id="campoDeBusca" />
        </header>

        <main>
          <nav className="menu-vertical">
            <ul>
              <li className="botoes-meunu-vertical">Início</li>
              <li className="botoes-meunu-vertical">Em alta</li>
              <li className="botoes-meunu-vertical">Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical">Originais</li>
              <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
          </nav>

          <section className="painel-de-videos">
            <CardVideo />
            <InfosUsuario />
          </section>
        </main>

        <footer>
          <h4>Copyright © 2022 Labenu All rights reserved.</h4>
        </footer>
      </div>
    </div>
  );
}
