import { useState } from "react";
import { Button, Container, LiValue, Li, Ul } from "./styles";
interface CounterPropos{
  timing: {
    hour: number;
    minute: number;
    second: number;
  }
}

function Counter({timing: {hour, minute, second}}: CounterPropos) {

  const [isStarted, setIsStarted] = useState(false);

  const handleStartClick = () => {
    setIsStarted(true)
  }

  return(
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
          <Button onClick={handleStartClick}>Start</Button>
        </Li>
      </Ul>
    </Container>
  )
}

export default Counter;