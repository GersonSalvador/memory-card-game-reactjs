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

  it('should call clickHandler function on click', () => {
    const handler = jest.fn()
    const {getByTestId} = render(<Button dataTestId='btn' clickHandler={handler}/>);
    const btn = getByTestId('btn');
    btn.click()
    expect(handler).toHaveBeenCalledTimes(1)
  })

})
