import { render, screen } from '@testing-library/react';
import Header from './';

describe('Header component', () => {

  it('renders on screen', () => {
    render(<Header />);
    const headerElement = screen.getByTestId('header');
    expect(headerElement).toBeInTheDocument();
  });

  it("should render it's children", () => {
    render(<Header>text test</Header>);
    const buttonElement = screen.getByTestId('header');
    expect(buttonElement).toHaveTextContent('text test');
  })
  
})
