import Card from "../Card";
import { Container } from "./styles"

interface BoardProps {
  levelInfo: {
    pairs: number;
    width: number;
  }
}

function Board({levelInfo: {pairs, width}}: BoardProps){
  return (
    <Container data-testid="board" boardWidth={width}>
      {
        [...Array(pairs * 2)].map((i, index) => <Card img="https://avatars.dicebear.com/api/bottts/1.svg" key={`img-${index}`}/>)
      }
    </Container>
  )
}

export default Board;