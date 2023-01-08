import React from "react";
import { ICardInfo } from "../Board";
import { CardWrap, CardInner, CardFront, CardBack, CardImg } from "./styles";

interface ICard{
  img: string;
  pair: number[];
  setPair: React.Dispatch<React.SetStateAction<number[]>>;
  cardInfo: ICardInfo;
  cardSequence: number;
  allCards: ICardInfo[];
  setAllCards: React.Dispatch<React.SetStateAction<ICardInfo[]>>;
  isHidden: boolean;
}

interface IValue{
  cardIndex?: number;
  isHidden?: boolean;
  isSelected?: boolean;
}

export default function Card({img, pair, setPair, cardInfo, cardSequence, allCards, setAllCards, isHidden}: ICard){
  const {cardIndex, isSelected} = cardInfo
  
  const changeCardsInfo = (indexToChange: number[], value: IValue) => {
    const changedCards = allCards.map((card: ICardInfo, index) => {
      if(indexToChange.some(i => i === index))
        return {...card, ...value}
      return card
    })
    setAllCards(changedCards)
  }

  const handleClick = () => {
    if(pair.length === 0){
      changeCardsInfo([cardSequence], {isSelected: true})
      setPair([cardSequence])
    }
    if(pair.length > 0){
      const pairIndex = allCards[pair[0]].cardIndex
      if(pairIndex === cardIndex)
        changeCardsInfo([...pair, cardSequence], {isSelected: true, isHidden: true})
      else
        changeCardsInfo([...pair, cardSequence], {isSelected: false})
      setPair([])
    }
  }

  return(
    <CardWrap data-testid="card" data-index="0" onClick={handleClick}>
      <CardInner isSelected={isSelected} isHidden={isHidden}>
        <CardFront/>
        <CardBack>
          <CardImg src={img} alt="card" data-testid="card-image"/>
        </CardBack>
      </CardInner>
    </CardWrap>
  )
}