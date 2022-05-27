import { render, screen } from '@testing-library/react';
import Title from './';

describe('Title component', () => {

  it('renders on screen', () => {
    render(<Title />);
    const component = screen.getByTestId('title');
    expect(component).toBeInTheDocument();
  });

  it("should render it's children", () => {
    render(<Title>text test</Title>);
    const component = screen.getByTestId('title');
    expect(component).toHaveTextContent('text test')
  })
  
})
