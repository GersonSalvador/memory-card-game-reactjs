import { render, screen } from '@testing-library/react';
import Board from './';

describe('Board component', () => {

  it('renders on screen', () => {
    render(<Board boardWidth={200}/>);
    const component = screen.getByTestId('board');
    expect(component).toBeInTheDocument();
  });

  // it("should render it's children", () => {
  //   const btnText = "Button Text"
  //   render(<Button>{btnText}</Button>);

  //   const component = screen.getByTestId('btn');

  //   expect(component).toBeInTheDocument()
  //   expect(component).toHaveTextContent(btnText);
  // })

})