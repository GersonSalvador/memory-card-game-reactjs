import styled from "styled-components";

interface H1Props {
  isWon: boolean;
}

export const Container = styled.div`
  text-align: center;
`;

export const Title = styled.h1<H1Props>`
  font-size: 1.5em;
  color: ${({isWon}) => isWon ? '#2dc439' : '#c42d2d'};
`;

export const Message = styled.h3`
  font-size: 1.17em;
  font-weight: 400;
  color: var(--main-text);
`;