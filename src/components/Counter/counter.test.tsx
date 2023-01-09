import { useState } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
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

  it("should show olny start-btn", () => {
    const { queryByTestId } = renderCounter({ hours: 0, minutes: 0, seconds: 0 })

    expect(queryByTestId('hour-value')).toBeNull();
    expect(queryByTestId('minute-value')).toBeNull();
    expect(queryByTestId('second-value')).toBeNull();
    const startBtn = screen.getByTestId('start-btn');

    expect(startBtn).toHaveTextContent('Start');
  })

  it("should render it's props and start-btn after start-btn been clicked", () => {
    renderCounter({ hours: 1, minutes: 5, seconds: 55 });

    const startBtn = screen.getByTestId('start-btn');
    startBtn.click()

    const hourProp = screen.getByTestId('hour-value');
    const minuteProp = screen.getByTestId('minute-value');
    const secondProp = screen.getByTestId('second-value');

    expect(hourProp).toHaveTextContent('1');
    expect(minuteProp).toHaveTextContent('5');
    expect(secondProp).toHaveTextContent('55');
    expect(startBtn).toHaveTextContent('Stop');
  })
  
  it('should start counting on hit start btn', () => {
    const { getByTestId } = renderCounter({ hours: 0, minutes: 0, seconds: 0})
    const startBtn = screen.getByTestId('start-btn')
    fireEvent.click(startBtn)
    const hours = getByTestId('hour-value')
    const minutes = getByTestId('minute-value')
    const seconds = getByTestId('second-value')
    expect(hours).toHaveTextContent('0')
    expect(minutes).toHaveTextContent('0')
    expect(seconds).toHaveTextContent('0')
    startBtn.click()
    setTimeout(() => {
      expect(hours).toHaveTextContent('0')
      expect(minutes).toHaveTextContent('0')
      expect(seconds).toHaveTextContent('1')
    }, 1000)
  })


})
