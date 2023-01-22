import React from "react";
import { Iscore } from "../../utils/handleStoredScores";
import { 
  Container, 
  Title, 
  List, 
  ListItem,
  Position,
  Name,
  Time,
} from "./styles";

interface IScoreBoard{
  scores: Iscore[];
}
interface IhandleTime{
  hours: number;
  minutes: number;
  seconds: number;
}

const handleTime = ({hours, minutes, seconds}: IhandleTime) => {
  return {
    hours: `${hours}`.padStart(2, '0'),
    minutes: `${minutes}`.padStart(2, '0'),
    seconds: `${seconds}`.padStart(2, '0'),
  }
}

export default function ScoreBoard({scores}: IScoreBoard) {
  return (
    <Container data-testid="score-board">
      <Title>Score Board</Title>
      <List>
        {scores.map(({player, time}, index) => {
          const {hours, minutes, seconds} = handleTime(time);
          return <ListItem key={index} data-testid="score">
            <Position>{++index}</Position>
            <Name>{player}</Name>
            <Time>{hours}:{minutes}:{seconds}</Time>
          </ListItem>
        })}
      </List>
    </Container>
  )
}