import { render, screen } from '@testing-library/react';
import Button from './';

describe('Button component', () => {

  it('renders on screen', () => {
    render(<Button dataTestId='btn'/>);
    const component = screen.getByTestId('btn');
    expect(component).toBeInTheDocument();
  });

  it("should render it's children", () => {
    const btnText = "Button Text"
    render(<Button dataTestId='btn'>{btnText}</Button>);

    const component = screen.getByTestId('btn');

    expect(component).toBeInTheDocument()
    expect(component).toHaveTextContent(btnText);
  })

})
