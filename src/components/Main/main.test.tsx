import { render } from '@testing-library/react';
import Main from './';

function ChildrenComponent(){
  return (
    <span data-testid="span">component test</span>
  )
}

describe('Header component', () => {

  it('renders on screen', () => {
    const {getByTestId} = render(<Main />);
    const component = getByTestId('main');
    expect(component).toBeInTheDocument();
  });

  it("should render it's children", () => {
    const {getByTestId} = render(<Main><ChildrenComponent /></Main>);
    const children = getByTestId('span');
    expect(children).toBeInTheDocument();
  })
  
})
