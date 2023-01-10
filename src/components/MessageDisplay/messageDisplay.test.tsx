import { render } from '@testing-library/react';
import MessageDisplay from '.'; './';

describe('Header component', () => {
  const findRenderedComponentWithType = () => {
    return render(<MessageDisplay 
      won={true}
    />)
  }

  it('should renders on screen', () => {
    const {getByTestId} = findRenderedComponentWithType()
    const component = getByTestId('message-container');
    expect(component).toBeInTheDocument();
  });

  
})
