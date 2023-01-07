import { useState } from "react";
import { CardWrap, CardInner, CardFront, CardBack, CardImg } from "./styles";

interface ICard{
  img: string;
}

export default function Card({img}: ICard){
  const [isSelected, setIsSelected] = useState(false)

  const handleClick = () => {
    setIsSelected(true)
  }

  return(
    <CardWrap data-testid="card" data-index="0" onClick={handleClick}>
      <CardInner isSelected={isSelected} >
        <CardFront data-id="1"/>
        <CardBack>
          <CardImg src={img} alt="card" data-testid="card-image"/>
        </CardBack>
      </CardInner>
    </CardWrap>
  )
}