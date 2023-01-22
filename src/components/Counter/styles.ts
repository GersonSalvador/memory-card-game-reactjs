import styled from 'styled-components';

export const Container = styled.div``;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  padding: 20px 0;
  width: 460px;
`;

export const Li = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  flex-grow: 1;
  color: var(--main-5);
  border: 1px solid var(--main-2);
  transition: all 0.8s ease-in;

  &:last-child{
    display: flex;
  }
`;

export const Button = styled.button`
  padding: 5px 8px;
  border: none;
  outline: none;
  background: none;
  color: var(--main-5);
  text-transform: uppercase;
  font-size: large;
  cursor: pointer;
`;

export const LiValue = styled.div`
  text-align: center;
`;
