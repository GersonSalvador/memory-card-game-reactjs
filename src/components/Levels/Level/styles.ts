import styled from 'styled-components';

export const Container = styled.li`
  
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  flex-grow: 1;
  color: #fff;
  border: 1px solid var(--main-2);
  transition: all 0.8s ease-in;
  display: block;
  text-align: center;
  cursor: pointer;

  &:active,&:hover{
    background: rgba(0,0,0,.2);
    transition: all .2s linear;
  }
`;

export const H3 = styled.h3`
  text-align:center;
  display: block;
`;

export const Span = styled.span`
  text-align:center;
  display: block;
  margin-top: 4px;
`;