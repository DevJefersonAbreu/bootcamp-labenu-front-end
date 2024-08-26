import { Card } from '../components/Card/Card';
import useGetCharacters from '../hooks/useGetCharacters';
import { Title, NameContainer } from './style';

const CharactersListPage = () => {
  const { characters, error, isLoading } = useGetCharacters();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <Title>Nomes dos Personagens</Title>
      <NameContainer>
        {characters.map(character => (
          <Card 
            key={character.name} 
            text={character.name} 
            backgroudColor={'#fff'}
            textColor={'#000'}
          />
        ))}
      </NameContainer>
    </div>
  );
};

export default CharactersListPage;
