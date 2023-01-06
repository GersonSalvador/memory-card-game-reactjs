import { useState } from 'react';
import { render, screen } from '@testing-library/react';
import Counter from './';

interface RenderCounterProps {
  hours: number;
  minutes: number;
  seconds: number;
}

function renderCounter(timing: RenderCounterProps) {
  function MyComponent() {

    const [isStarted, setIsStarted] = useState(false);

    return (<Counter
      timing={timing}
      started={{ isStarted, setIsStarted }}
    />)

  }

  return render(<MyComponent />);
}

describe('Ul component', () => {

  it('renders on screen', () => {
    renderCounter({ hours: 0, minutes: 0, seconds: 0 })
    const component = screen.getByTestId('counter');
    expect(component).toBeInTheDocument();
  });

  it("should show olny btn-start", () => {
    const { queryByTestId } = renderCounter({ hours: 0, minutes: 0, seconds: 0 })

    expect(queryByTestId('hour-value')).toBeNull();
    expect(queryByTestId('minute-value')).toBeNull();
    expect(queryByTestId('second-value')).toBeNull();
    const startBtn = screen.getByTestId('btn-start');

    expect(startBtn).toHaveTextContent('Start');
  })

  it("should render it's props and btn-start after btn-start been clicked", () => {
    renderCounter({ hours: 1, minutes: 5, seconds: 55 });

    const startBtn = screen.getByTestId('btn-start');
    startBtn.click()

    const hourProp = screen.getByTestId('hour-value');
    const minuteProp = screen.getByTestId('minute-value');
    const secondProp = screen.getByTestId('second-value');

    expect(hourProp).toHaveTextContent('1');
    expect(minuteProp).toHaveTextContent('5');
    expect(secondProp).toHaveTextContent('55');
    expect(startBtn).toHaveTextContent('Stop');
  })

})
