import { useState } from 'react';
import { render, screen } from '@testing-library/react';
import Counter from './';

interface RenderCounterProps {
  hour: number;
  minute: number;
  second: number;
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
    renderCounter({ hour: 0, minute: 0, second: 0 })
    const component = screen.getByTestId('counter');
    expect(component).toBeInTheDocument();
  });

  it("should show olny btn-start", () => {
    const { queryByTestId } = renderCounter({ hour: 0, minute: 0, second: 0 })

    expect(queryByTestId('hour-value')).toBeNull();
    expect(queryByTestId('minute-value')).toBeNull();
    expect(queryByTestId('second-value')).toBeNull();
    const startBtn = screen.getByTestId('btn-start');

    expect(startBtn).toHaveTextContent('Start');
  })

  it("should render it's props and btn-start after btn-start been clicked", () => {
    renderCounter({ hour: 1, minute: 5, second: 55 });

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
