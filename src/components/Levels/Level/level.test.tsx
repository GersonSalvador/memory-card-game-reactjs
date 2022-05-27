import { render, screen } from '@testing-library/react';
import Level from '.';

describe('Level component', () => {

  it('renders on screen', () => {
    render(<Level />);
    const component = screen.getByTestId('li');
    expect(component).toBeInTheDocument();
  });

  it("should render it's props", () => {
    render(<Level level={{name: 'level one', pairs: 10}} />);
    const props = screen.getByText('level one');
    expect(props).toHaveTextContent('level one');
  })
  
})
