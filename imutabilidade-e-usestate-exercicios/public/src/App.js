// App.js
import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import PokemonCard from './Components/PokemonCard/PokemonCard';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

function App() {
  const [pikachu, setPikachu] = useState({
    name: "Pikachu",
    type: "Electric",
    evolved: false,
    weight: 6,
    color: 'yellow',
    image: 'https://archives.bulbagarden.net/media/upload/archive/0/0d/20130810074808%210250Pikachu.png',
    id: 1
  });

  const evolvePikachu = () => {
    if (!pikachu.evolved) {
      setPikachu({
        ...pikachu,
        name: "Raichu",
        evolved: true,
        weight: 30,
        color: 'orange',
        image: 'https://archives.bulbagarden.net/media/upload/archive/8/88/20130810074813%210026Raichu.png'
      });
    }
  };

  return (
    <>
      <GlobalStyles />
      <FlexContainer>
        <PokemonCard
          name={pikachu.name}
          type={pikachu.type}
          weight={pikachu.weight}
          color={pikachu.color}
          image={pikachu.image}
          onEvolve={evolvePikachu}
        />
      </FlexContainer>
    </>
  );
}

export default App;
