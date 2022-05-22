import { render, screen } from '@testing-library/react';
import Main from './';

function ChildrenComponent(){
  return (
    <span data-testid="span">component test</span>
  )
}

describe('Header component', () => {

  it('renders on screen', () => {
    render(<Main />);
    const headerElement = screen.getByTestId('main');
    expect(headerElement).toBeInTheDocument();
  });

  it("should render it's children", () => {
    render(<Main><ChildrenComponent /></Main>);
    const buttonElement = screen.getByTestId('main');
    expect(buttonElement).toBeInTheDocument();
  })
  
})
