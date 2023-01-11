import { fireEvent, render, screen } from '@testing-library/react';
import Counter from './';

interface RenderCounterProps {
  hours: number;
  minutes: number;
  seconds: number;
}

function renderCounter(isStartedBool: boolean, timing: RenderCounterProps) {
  const isStarted = isStartedBool
  const setIsStarted = jest.fn()
  const isFinished = false
  const setIsFinished = jest.fn()
  const setIsWon = jest.fn()
  
  function MyComponent() {
    return (<Counter
      timing={timing}
      started={{ isStarted, setIsStarted }}
      finished={{ isFinished, setIsFinished }}
      setIsWon={setIsWon}
    />)

  }

  return { 
    render: render(<MyComponent />),
    setIsStarted,
    setIsFinished,
    setIsWon,
  };
}

describe('Ul component', () => {

  it('renders on screen', () => {
    renderCounter(true, { hours: 0, minutes: 0, seconds: 0 })
    const component = screen.getByTestId('counter');
    expect(component).toBeInTheDocument();
  });

  it("should only show start-btn", () => {
    const { render: {queryByTestId} } = renderCounter(false, { hours: 0, minutes: 0, seconds: 0 })

    expect(queryByTestId('hour-value')).toBeNull();
    expect(queryByTestId('minute-value')).toBeNull();
    expect(queryByTestId('second-value')).toBeNull();
    const startBtn = queryByTestId('start-btn');

    expect(startBtn).toHaveTextContent('Start');
  })

  it('should update setIsStarted to true on hit start btn', () => {
    const { 
      render: {getByTestId}, 
      setIsStarted 
    } = renderCounter(false, { hours: 0, minutes: 0, seconds: 0 })
    const startBtn = getByTestId('start-btn')
    fireEvent.click(startBtn)
    setTimeout(() => {
      expect(setIsStarted).toBeCalledTimes(1)
      expect(setIsStarted).toBeCalledWith(true)
    }, 100)
  })

  it('should update setIsStarted to false on hit stop btn', () => {
    const { 
      setIsStarted 
    } = renderCounter(true, { hours: 0, minutes: 0, seconds: 0 })
    const startBtn = screen.getByTestId('start-btn')
    fireEvent.click(startBtn)
    setTimeout(() => {
      expect(setIsStarted).toBeCalledTimes(1)
      expect(setIsStarted).toBeCalledWith(false)
    }, 100)
  })

  it('should update setIsFinished to true on hit stop btn', () => {
    const { 
      setIsFinished 
    } = renderCounter(true, { hours: 0, minutes: 0, seconds: 0 })
    const startBtn = screen.getByTestId('start-btn')
    fireEvent.click(startBtn)
    setTimeout(() => {
      expect(setIsFinished).toBeCalledTimes(1)
      expect(setIsFinished).toBeCalledWith(true)
    }, 100)
  })

  it('should update setIsWon to true on hit stop btn', () => {
    const { 
      setIsWon 
    } = renderCounter(true, { hours: 0, minutes: 0, seconds: 0 })
    const startBtn = screen.getByTestId('start-btn')
    fireEvent.click(startBtn)
    setTimeout(() => {
      expect(setIsWon).toBeCalledTimes(1)
      expect(setIsWon).toBeCalledWith(true)
    }, 100)
  })

  it("should render counter's props after start", () => {
    const timing = { hours: 1, minutes: 5, seconds: 55 } 
    const {render: {getByTestId}} = renderCounter(false, timing);

    const startBtn = getByTestId('start-btn');
    fireEvent.click(startBtn)
    setTimeout(() => {
      const hourProp = getByTestId('hour-value');
      const minuteProp = getByTestId('minute-value');
      const secondProp = getByTestId('second-value');
      expect(hourProp).toHaveTextContent('1');
      expect(minuteProp).toHaveTextContent('5');
      expect(secondProp).toHaveTextContent('55');
    }, 100)

  })

  it("should have Stop after Start btn beeing clicked", () => {
    const timing = { hours: 1, minutes: 5, seconds: 55 } 
    renderCounter(false, timing);

    const startBtn = screen.getByTestId('start-btn');
    fireEvent.click(startBtn)
    setTimeout(() => {
      expect(startBtn).toHaveTextContent('Stop');
    }, 100)
  })
    
  it('should start counting on hit start btn', () => {
    const { render: {getByTestId} } = renderCounter(false, { hours: 0, minutes: 0, seconds: 0})
    const startBtn = screen.getByTestId('start-btn')
    fireEvent.click(startBtn)
    setTimeout(() => {
      const hours = getByTestId('hour-value')
      const minutes = getByTestId('minute-value')
      const seconds = getByTestId('second-value')
      expect(hours).toHaveTextContent('0')
      expect(minutes).toHaveTextContent('0')
      expect(seconds).toHaveTextContent('1')
    }, 1000)
  })

})
