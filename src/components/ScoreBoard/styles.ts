import styled from "styled-components";

export const Container = styled.div`
  border-left: 1px solid #fff;
  width: 20vw;
`
export const Title = styled.div`
  color: var(--main-text);
  font-size: 1.6em;
  margin: 8px;
  text-align: center;
  font-weight: 600;
`
export const List = styled.ul`
  list-style: none;
  border: solid 0px var(--main-5);
  border-width: 0 0 1px 0;
`
export const ListItem = styled.li`
  color: var(--main-text);
  padding: 8px;
  border: solid 0px var(--main-5);
  border-width: 1px 0 0 0;
  display: flex;
  align-items: center;
`
export const Position = styled.span`
`
export const Name = styled.span`
  padding: 0 4px;
`
export const Time = styled.span`
  font-size: .9em;
`