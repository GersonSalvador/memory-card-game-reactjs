import { useEffect } from "react";
import { Container } from "./styles";

interface IScoreBoard{
  isStarted: boolean;
  isWon: boolean;
  time: {
    seconds: number;
    minutes: number;
    hours: number;
  }
}

export default function ScoreBoard({isStarted, isWon, time}: IScoreBoard) {
  useEffect(() => {
    const {seconds, minutes, hours} = time
    console.log({isWon, isStarted, seconds, minutes, hours})
  }, [isStarted, isWon])
  return (<Container data-testid="score-board"/>)
}