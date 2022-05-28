import styled from 'styled-components';

export const Container = styled.div``;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  padding: 20px 0;
`;

export const Li = styled.li`

  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  flex-grow: 1;
  color: #fff;
  border: 1px solid var(--main-2);
  transition: all 0.8s ease-in;

  &:last-child{
    display: flex;
  }
`;
