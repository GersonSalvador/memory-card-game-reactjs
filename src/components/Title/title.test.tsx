import { render, screen } from '@testing-library/react';
import Title from './';

describe('Title component', () => {

  it('renders on screen', () => {
    render(<Title />);
    const titleElement = screen.getByTestId('title');
    expect(titleElement).toBeInTheDocument();
  });

  it("should render it's children", () => {
    render(<Title>text test</Title>);
    const buttonElement = screen.getByTestId('title');
    expect(buttonElement).toHaveTextContent('text test')
  })
  
})
