import { render, screen } from '@testing-library/react';
import Counter from './';

describe('Ul component', () => {

  it('renders on screen', () => {
    render(<Counter timing={{hour: 0, minute: 0, second: 0}}/>);
    const counterElement = screen.getByTestId('counter');
    expect(counterElement).toBeInTheDocument();
  });

  it("should render it's props", () => {
    render(<Counter timing={{hour: 1, minute: 5, second: 55}} />);
    const hourProp = screen.getByTestId('hour');
    const minuteProp = screen.getByTestId('minute');
    const secondProp = screen.getByTestId('second');
    expect(hourProp).toHaveTextContent('1');
    expect(minuteProp).toHaveTextContent('5');
    expect(secondProp).toHaveTextContent('55');
  })
  
})
