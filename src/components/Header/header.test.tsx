import { render, screen } from '@testing-library/react';
import Header from './';

describe('Header component', () => {

  it('renders on screen', () => {
    render(<Header />);
    const component = screen.getByTestId('header');
    expect(component).toBeInTheDocument();
  });

  it("should render it's children", () => {
    render(<Header>text test</Header>);
    const component = screen.getByTestId('header');
    expect(component).toHaveTextContent('text test');
  })
  
})
