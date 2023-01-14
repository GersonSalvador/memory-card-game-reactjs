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
  waitFn: {
    wait: boolean;
    setWait: React.Dispatch<React.SetStateAction<boolean>>;
  }
}

interface IValue{
  cardIndex?: number;
  isHidden?: boolean;
  isSelected?: boolean;
}

export default function Card({img, pair, setPair, cardInfo, cardSequence, allCards, setAllCards, waitFn}: ICard){
  const {cardIndex, isHidden, isSelected} = cardInfo
  const {wait, setWait} = waitFn
  
  const changeCardsInfo = (indexToChange: number[], value: IValue) => {
    const changedCards = allCards.map((card: ICardInfo, index) => {
      if(indexToChange.some(i => i === index))
        return {...card, ...value}
      return card
    })
    setAllCards(changedCards)
  }

  const handleClick = async () => {
    if(wait || isSelected || isHidden)
      return
    if(pair.length === 0){
      changeCardsInfo([cardSequence], {isSelected: true})
      setPair([cardSequence])
    }
    if(pair.length > 0){
      setWait(true)
      const pairIndex = allCards[pair[0]].cardIndex
      changeCardsInfo([cardSequence], {isSelected: true})
      await new Promise((r) => setTimeout(r, 1100));
      if(pairIndex === cardIndex)
        changeCardsInfo([...pair, cardSequence], {isSelected: true, isHidden: true})
      else
        changeCardsInfo([...pair, cardSequence], {isSelected: false})
      setPair([])
      setWait(false)
    }
  }

  return(
    <CardWrap data-testid="card" data-index="0" onClick={handleClick} pointer={() => wait || isSelected}>
      <CardInner isSelected={isSelected} isHidden={isHidden}>
        <CardFront/>
        <CardBack>
          <CardImg src={img} alt="card" data-testid="card-image"/>
        </CardBack>
      </CardInner>
    </CardWrap>
  )
}