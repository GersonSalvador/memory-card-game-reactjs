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
    const component = screen.getByTestId('main');
    expect(component).toBeInTheDocument();
  });

  it("should render it's children", () => {
    render(<Main><ChildrenComponent /></Main>);
    const children = screen.getByTestId('span');
    expect(children).toBeInTheDocument();
  })
  
})
