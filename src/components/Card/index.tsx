import { CardWrap, CardInner, CardFront, CardBack, CardImg } from "./styles";

interface ICard{
  img: string;
}

export default function Card({img}: ICard){
  return(
    <CardWrap data-testid="card" data-index="0">
      <CardInner>
        <CardFront data-id="1"/>
        <CardBack>
          <CardImg src={img} alt="card" data-testid="card-image"/>
        </CardBack>
      </CardInner>
    </CardWrap>
  )
}