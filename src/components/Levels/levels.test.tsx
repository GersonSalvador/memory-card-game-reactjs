import { render, screen } from '@testing-library/react';
import Levels from '.';

describe('Level component', () => {

  it('renders on screen', () => {
    render(<Levels />);
    const component = screen.getByTestId('ul');
    expect(component).toBeInTheDocument();
  });

  it("should render it's props", () => {
    render(<Levels levels={[{name: 'level one', pairs: 10}]} />);
    const props = screen.getByText('level one');
    expect(props).toHaveTextContent('level one');
  })
  
})
