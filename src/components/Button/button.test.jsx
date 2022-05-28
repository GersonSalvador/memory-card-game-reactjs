import { render, screen } from '@testing-library/react';
import Button from './';

describe('Ul component', () => {

  it('renders on screen', () => {
    render(<Button timing={{hour: 0, minute: 0, second: 0}}/>);
    const component = screen.getByTestId('btn');
    expect(component).toBeInTheDocument();
  });

  it("should render it's children", () => {
    const btnText = "Button Text"
    render(<Button>{btnText}</Button>);

    const component = screen.getByTestId('btn');

    expect(component).toBeInTheDocument()
    expect(component).toHaveTextContent(btnText);
  })

})
