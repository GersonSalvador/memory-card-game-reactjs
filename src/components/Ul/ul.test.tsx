import { render, screen } from '@testing-library/react';
import Ul from './';

describe('Ul component', () => {

  it('renders on screen', () => {
    render(<Ul />);
    const headerElement = screen.getByTestId('ul');
    expect(headerElement).toBeInTheDocument();
  });

  it("should render it's props", () => {
    render(<Ul levels={[{name: 'level one', pairs: 10}]} />);
    const buttonElement = screen.getByTestId('ul');
    expect(buttonElement).toHaveTextContent('level one Pairs 10');
  })
  
})
