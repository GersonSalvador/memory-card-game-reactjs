import { render } from '@testing-library/react';
import Title from './';

describe('Title component', () => {

  it('renders on screen', () => {
    const {getByTestId} = render(<Title />);
    const component = getByTestId('title');
    expect(component).toBeInTheDocument();
  });

  it("should render it's children", () => {
    const {getByTestId} = render(<Title>text test</Title>);
    const component = getByTestId('title');
    expect(component).toHaveTextContent('text test')
  })
  
})
