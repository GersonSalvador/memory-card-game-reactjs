import React from "react";
import { act } from "react-dom/test-utils";

import { Button, Container, LiValue, Li, Ul } from "./styles";

interface CounterPropos {
  timing: {
    hour: number;
    minute: number;
    second: number;
  },
  started: {
    isStarted: boolean;
    setIsStarted: React.Dispatch<React.SetStateAction<boolean>>;
  }
}

function Counter({
  timing: { hour, minute, second },
  started: { isStarted, setIsStarted }
}: CounterPropos) {

  const handleStartClick = () => {
    act(() => {
      setIsStarted(!isStarted)
    })
  }

  return (
    <Container data-testid="counter">
      <Ul>
        {isStarted && <Li>
          <LiValue data-testid="hour-value">
            {hour}
          </LiValue>
          <span>Hours</span>
        </Li>}
        {isStarted && <Li>
          <LiValue data-testid="minute-value">
            {minute}
          </LiValue>
          <span>Minutes</span>
        </Li>}
        {isStarted && <Li>
          <LiValue data-testid="second-value">
            {second}
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
  )
}

export default Counter;