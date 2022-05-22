import { render, screen } from '@testing-library/react';
import Header from './';

function Button(){
  return <button data-testid="button-test">exemplo</button>
}

describe('Header component', () => {

  it('renders on screen', () => {
    render(<Header />);
    const headerElement = screen.getByTestId('header');
    expect(headerElement).toBeInTheDocument();
  });

  it("should render it's children", () => {
    render(<Header><Button /></Header>);
    const buttonElement = screen.getByTestId('button-test');
    expect(buttonElement).toBeInTheDocument();
  })
  
})
