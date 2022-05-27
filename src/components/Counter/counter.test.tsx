import { render, screen } from '@testing-library/react';
import Counter from './';

describe('Ul component', () => {

  it('renders on screen', () => {
    render(<Counter timing={{hour: 0, minute: 0, second: 0}}/>);
    const component = screen.getByTestId('counter');
    expect(component).toBeInTheDocument();
  });

  it("should render it's props", () => {
    render(<Counter timing={{hour: 1, minute: 5, second: 55}} />);
    const hourProp = screen.getByTestId('hour-value');
    const minuteProp = screen.getByTestId('minute-value');
    const secondProp = screen.getByTestId('second-value');
    expect(hourProp).toHaveTextContent('1');
    expect(minuteProp).toHaveTextContent('5');
    expect(secondProp).toHaveTextContent('55');
  })
  
})
