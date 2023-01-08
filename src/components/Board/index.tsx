import { useEffect, useState} from "react";
import Card from "../Card";
import { Container } from "./styles"

interface BoardProps {
  levelInfo: {
    pairs: number;
    width: number;
  }
}

export interface ICardInfo{
  cardIndex: number;
  isHidden: boolean;
  isSelected: boolean;
}

function Board({levelInfo: {pairs, width}}: BoardProps){
  const cardsIndexArr = [...Array(pairs)].map((item, index) => index)
  const pairsIndexArr = [...cardsIndexArr, ...cardsIndexArr]
  const [allCards, setAllCards] = useState<ICardInfo[]>([])
  const [pair, setPair] = useState<number[]>([])

  useEffect(() => {
    const shuffled = pairsIndexArr.sort(() => Math.random() - 0.5);
    const cardsInfos = shuffled.map((cardIndex) => ({cardIndex, isHidden: false, isSelected: false}))
    setAllCards(cardsInfos)
  }, [])
  return (
    <Container data-testid="board" boardWidth={width}>
      {
        allCards.map((cardInfo, cardSequence) => {
          const {cardIndex, isHidden} = cardInfo
          return <Card 
            img={`https://avatars.dicebear.com/api/bottts/${cardIndex}.svg`} 
            cardInfo={cardInfo} 
            cardSequence={cardSequence}
            allCards={allCards}
            setAllCards={setAllCards}
            key={`img-${cardSequence}`} 
            pair={pair} 
            setPair={setPair}
            isHidden={isHidden}
        />})
      }
    </Container>
  )
}

export default Board;