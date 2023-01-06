import React from "react";
import { act } from "react-dom/test-utils";

import Board from "../Board";

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
  }
}

function Counter({
  timing: { hours, minutes, seconds },
  started: { isStarted, setIsStarted }
}: CounterPropos) {

  const handleStartClick = () => {
    act(() => {
      setIsStarted(!isStarted)
    })
  }

  return (
    <>
      <Container data-testid="counter">
        <Ul>
          {isStarted && <Li>
            <LiValue data-testid="hour-value">
              {hours}
            </LiValue>
            <span>Hours</span>
          </Li>}
          {isStarted && <Li>
            <LiValue data-testid="minute-value">
              {minutes}
            </LiValue>
            <span>Minutes</span>
          </Li>}
          {isStarted && <Li>
            <LiValue data-testid="second-value">
              {seconds}
            </LiValue>
            <span>Seconds</span>
          </Li>}
          <Li>
            <Button data-testid="btn-start" onClick={handleStartClick}>
              {isStarted ? "Stop" : "Start"}
            </Button>
          </Li>
        </Ul>
      </Container>
      {isStarted && <Board boardWidth={200}/>}
    </>
  )
}

export default Counter;