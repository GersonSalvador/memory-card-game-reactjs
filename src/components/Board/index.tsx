import { useEffect, useState} from "react";
import Card from "../Card";
import { Container } from "./styles"

interface BoardProps {
  levelInfo: {
    pairs: number;
    width: number;
  }
}

function Board({levelInfo: {pairs, width}}: BoardProps){
  const cardsIndexArr = [...Array(pairs)].map((item, index) => index)
  const pairsIndexArr = [...cardsIndexArr, ...cardsIndexArr]
  const [cardsIndex, setCardsIndex] = useState<Number[]>([])

  useEffect(() => {
    const shuffled = pairsIndexArr.sort(() => Math.random() - 0.5);
    setCardsIndex(shuffled)
  }, [])
  return (
    <Container data-testid="board" boardWidth={width}>
      {
        cardsIndex.map((i, idx) => <Card img={`https://avatars.dicebear.com/api/bottts/${i}.svg`} key={`img-${idx}`}/>)
      }
    </Container>
  )
}

export default Board;