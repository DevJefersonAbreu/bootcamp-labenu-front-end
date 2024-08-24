import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Botao,
  ContainerInputs,
  ContainerMusicas,
  InputMusica,
  Musica,
} from "./styled";

export default function Musicas({ playlist }) {
  const [musicas, setMusicas] = useState([]);

  useEffect(() => {
    axios.get(`https://api-endpoint-das-musicas/${playlist.id}`)
      .then((response) => {
        setMusicas(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar músicas:", error);
      });
  }, [playlist.id]);

  return (
    <>
      <h1>{playlist.name}</h1>
      <ContainerMusicas>
        {/* Código para adicionar músicas */}
        <ContainerInputs>
          <InputMusica placeholder="artista" />
          <InputMusica placeholder="musica" />
          <InputMusica placeholder="url" />
          <Botao>Adicionar musica</Botao>
        </ContainerInputs>

        <tr>
          <th>URL/Música</th>
          <th>Artista</th>
          <th>Remover</th>
        </tr>

        {musicas.map((musica) => {
          return (
            <Musica key={musica.id}>
              <td>
                <a href={musica.url} target="blank">
                  {musica.name}
                </a>
              </td>
              <td>{musica.artist}</td>
              <td>
                <button>X</button>
              </td>
            </Musica>
          );
        })}
      </ContainerMusicas>
    </>
  );
}
