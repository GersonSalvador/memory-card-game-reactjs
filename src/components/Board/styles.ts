import styled from 'styled-components';

interface BoardProps {
  boardWidth: number;
}

export const Container = styled.div<BoardProps>`
  width: ${({ boardWidth }) => boardWidth + 'px'};
  display: flex;
  border: 1px solid var(--main-2);
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: var(--main-3);
  padding: 10px 5px;
  transition: all 0.8s ease-in;
`;

// interface liProps {
//   selected: boolean;
// }

// export const Container = styled.li<liProps>`
  
//   background: ${({ selected }) => (selected && 'rgba(0,0,0,.2)')};