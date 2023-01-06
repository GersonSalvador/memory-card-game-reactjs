import { Container } from "./styles"

interface BoardProps {
  boardWidth: number;
}

function Board({boardWidth}: BoardProps){
  return (
    <Container data-testid="board" boardWidth={boardWidth}>
      board with some cards
    </Container>
  )
}

export default Board;