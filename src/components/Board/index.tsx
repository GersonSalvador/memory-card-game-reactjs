import React, { useEffect, useState} from "react";
import Card from "../Card";
import { Container } from "./styles"

interface BoardProps {
  levelInfo: {
    pairs: number;
    width: number;
  },
  setIsFinished: React.Dispatch<React.SetStateAction<boolean>>;
  setIsWon: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ICardInfo{
  cardIndex: number;
  isHidden: boolean;
  isSelected: boolean;
}

function Board({
  levelInfo: {pairs, width},
  setIsFinished,
  setIsWon,
}: BoardProps){
  const cardsIndexArr = [...Array(pairs)].map((item, index) => index)
  const pairsIndexArr = [...cardsIndexArr, ...cardsIndexArr]
  const [allCards, setAllCards] = useState<ICardInfo[]>([])
  const [pair, setPair] = useState<number[]>([])
  const [wait, setWait] = useState<boolean>(false)

  useEffect(() => {
    const shuffled = pairsIndexArr.sort(() => Math.random() - 0.5);
    const cardsInfos = shuffled.map((cardIndex) => ({cardIndex, isHidden: false, isSelected: false}))
    setAllCards(cardsInfos)
  }, [])

  useEffect(() => {
    const result = allCards.reduce((acc, {isHidden}) => {
      if(isHidden === false)
        acc++
      return acc
    }, 0) === (pairs * 2)
    if(result){
      setIsFinished(true)
      setIsWon(true)
    }
  }, [allCards])
  return (
    <Container data-testid="board" boardWidth={width}>
      {
        allCards.map((cardInfo, cardSequence) => {
          const {cardIndex} = cardInfo
          return <Card 
            img={`https://avatars.dicebear.com/api/bottts/${cardIndex}.svg`} 
            cardInfo={cardInfo} 
            cardSequence={cardSequence}
            allCards={allCards}
            setAllCards={setAllCards}
            key={`img-${cardSequence}`} 
            pair={pair} 
            setPair={setPair}
            waitFn={{wait, setWait}}
        />})
      }
    </Container>
  )
}

export default Board;