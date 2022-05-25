import { render, screen } from '@testing-library/react';
import Level from './';

describe('Ul component', () => {

  it('renders on screen', () => {
    render(<Level />);
    const headerElement = screen.getByTestId('ul');
    expect(headerElement).toBeInTheDocument();
  });

  it("should render it's props", () => {
    render(<Level levels={[{name: 'level one', pairs: 10}]} />);
    const buttonElement = screen.getByText('level one');
    expect(buttonElement).toHaveTextContent('level one');
  })
  
})
