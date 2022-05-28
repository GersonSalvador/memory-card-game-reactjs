import { Container, Li, Ul } from "./styles";
interface CounterPropos{
  timing: {
    hour: number;
    minute: number;
    second: number;
  }
}

function Counter({timing: {hour, minute, second}}: CounterPropos) {
  return(
    <Container data-testid="counter">
      <Ul>
        <Li>
          <div data-testid="hour-value">
            {hour}
          </div>
          <span>Hours</span>
        </Li>
        <Li>
          <div data-testid="minute-value">
            {minute}
          </div>
          <span>Minutes</span>
        </Li>
        <Li>
          <div data-testid="second-value">
            {second}
          </div>
          <span>Seconds</span>
        </Li>
      </Ul>
    </Container>
  )
}

export default Counter;