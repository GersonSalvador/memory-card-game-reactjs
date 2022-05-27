import { render, screen } from '@testing-library/react';
import Level from '.';

describe('Li component', () => {

  it('renders on screen', () => {
    render(<Level />);
    const headerElement = screen.getByTestId('li');
    expect(headerElement).toBeInTheDocument();
  });

  it("should render it's props", () => {
    render(<Level level={{name: 'level one', pairs: 10}} />);
    const childrenElement = screen.getByText('level one');
    expect(childrenElement).toHaveTextContent('level one');
  })
  
})
