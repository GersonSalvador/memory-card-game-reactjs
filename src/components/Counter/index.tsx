interface CounterPropos{
  timing: {
    hour: number;
    minute: number;
    second: number;
  }
}

function Counter({timing: {hour, minute, second}}: CounterPropos) {
  return(
    <div data-testid="counter">
      <div data-testid="hour">
        <div data-testid="hour-value">
          {hour}
        </div>
      </div>
      <div data-testid="minute">
        <div data-testid="minute-value">
          {minute}
        </div>
      </div>
      <div data-testid="second">
        <div data-testid="second-value">
          {second}
        </div>
      </div>
    </div>
  )
}

export default Counter;