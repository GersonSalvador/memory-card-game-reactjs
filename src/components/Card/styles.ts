import styled from 'styled-components';

export const CardWrap = styled.figure`
  width: 100px;
  height: 100px;
  perspective: 1000px;
  position: relative;
  background-color: transparent;
  margin: 5px;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
`

export const CardInner = styled.div`
  position: relative;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  width: 100%;
  height: 100%;
`

export const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: var(--main-5);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
`

export const CardBack = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotateY(180deg);
  width: 100%;
  height: 100%;
  background-color: var(--main-5);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
`

export const CardImg = styled.img`
  max-width: 100%;
`