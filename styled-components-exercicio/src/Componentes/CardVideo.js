import styled from "styled-components";

const VideoCard = styled.div`
  display: grid;
  grid-template-rows: 3fr 1fr;
  grid-template-columns: 1fr;
  border-style: solid;
  border-width: thin;
  align-items: start;
  justify-items: stretch;
  cursor: pointer;
`;

const VideoImage = styled.img`
  width: 100%;
  height: 200px;
`;

const VideoTitle = styled.h4`
  margin-left: 20px;
`;

function CardVideo(props) {
  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido");
  }

  return (
    <VideoCard onClick={reproduzVideo}>
      <VideoImage src={props.image1} alt={props.textoAlternativo} />
      <VideoTitle>{props.titulo}</VideoTitle>
    </VideoCard>
  );
}

export default CardVideo;
