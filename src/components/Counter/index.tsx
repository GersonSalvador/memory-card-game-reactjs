import React from "react";

import { Button, Container, LiValue, Li, Ul } from "./styles";

interface CounterPropos {
  timing: {
    hours: number;
    minutes: number;
    seconds: number;
  },
  started: {
    isStarted: boolean;
    setIsStarted: React.Dispatch<React.SetStateAction<boolean>>;
  },
  finished: {
    isFinished: boolean;
    setIsFinished: React.Dispatch<React.SetStateAction<boolean>>;
  },
  setIsWon: React.Dispatch<React.SetStateAction<boolean>>;
}

function Counter({
  timing: { hours, minutes, seconds },
  started: { isStarted, setIsStarted },
  finished: { isFinished, setIsFinished },
  setIsWon,
}: CounterPropos) {

  const handleStartClick = () => {
    if(isStarted){
      setIsStarted(false)
      setIsFinished(true)
      setIsWon(false)
    }else{
      setIsStarted(true)
      setIsFinished(false)
    }
  }
  return (
    <>
      <Container data-testid="counter">
        <Ul>
          {(isStarted || isFinished) && <Li>
            <LiValue data-testid="hour-value">
              {hours}
            </LiValue>
            <span>Hours</span>
          </Li>}
          {(isStarted || isFinished) && <Li>
            <LiValue data-testid="minute-value">
              {minutes}
            </LiValue>
            <span>Minutes</span>
          </Li>}
          {(isStarted || isFinished) && <Li>
            <LiValue data-testid="second-value">
              {seconds}
            </LiValue>
            <span>Seconds</span>
          </Li>}
          <Li>
            <Button data-testid="start-btn" onClick={handleStartClick}>
              {isStarted ? "Resign" : "Start"}
            </Button>
          </Li>
        </Ul>
      </Container>
    </>
  )
}

export default Counter;