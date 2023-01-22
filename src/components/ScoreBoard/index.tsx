import React from "react";
import { Iscore } from "../../utils/handleStoredScores";
import { Container } from "./styles";

interface IScoreBoard{
  scores: Iscore[];
}

export default function ScoreBoard({scores}: IScoreBoard) {
  return (
    <Container data-testid="score-board">
      <h1>Score Board</h1>
      <ul>
        {scores.map(({player, time:{hours, minutes, seconds}}, index) => (
          <li key={index} data-testid="score">
            <span>{player}</span>
            <span>{hours}:{minutes}:{seconds}</span>
          </li>
        ))}
      </ul>
    </Container>
  )
}