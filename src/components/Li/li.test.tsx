import { render, screen } from '@testing-library/react';
import Li from '.';

describe('Li component', () => {

  it('renders on screen', () => {
    render(<Li />);
    const headerElement = screen.getByTestId('li');
    expect(headerElement).toBeInTheDocument();
  });

  it("should render it's props", () => {
    render(<Li level={{name: 'level one', pairs: 10}} />);
    const childrenElement = screen.getByText('level one');
    expect(childrenElement).toHaveTextContent('level one');
  })
  
})
