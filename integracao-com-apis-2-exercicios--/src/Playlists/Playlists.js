import React, { useState, useEffect } from "react";
import axios from "axios";
import Musicas from "../Musicas/Musicas";
import { ContainerPrincipal } from "./PlaylistStyles";

function Playlists() {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    axios.get('https://api-endpoint-da-playlist')
      .then((response) => {
        setPlaylists(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar playlists:", error);
      });
  }, []);

  return (
    <ContainerPrincipal>
      {playlists.map((playlist) => {
        return <Musicas key={playlist.id} playlist={playlist} />;
      })}
    </ContainerPrincipal>
  );
}

export default Playlists;
