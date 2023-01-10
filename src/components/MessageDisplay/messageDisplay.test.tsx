import { render } from '@testing-library/react';
import MessageDisplay, { loserMessage, loserTitle, winnerMessage, winnerTitle } from '.'; './';

describe('Header component', () => {
  const renderCompoenent = (won: boolean) => {
    return render(<MessageDisplay 
      won={won}
    />)
  }

  it('should renders on screen', () => {
    const {getByTestId} = renderCompoenent(true)
    const component = getByTestId('message-container');
    const title = getByTestId('message-title');
    const sub = getByTestId('message-sub');
    expect(component).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(sub).toBeInTheDocument();
  });

  it('should render the correct message when win', () => {
    const {getByTestId} = renderCompoenent(true)
    const title = getByTestId('message-title');
    const sub = getByTestId('message-sub');
    expect(title).toHaveTextContent(winnerTitle);
    expect(sub).toHaveTextContent(winnerMessage);
  });

  it('should render the correct message when lose', () => {
    const {getByTestId} = renderCompoenent(false)
    const title = getByTestId('message-title');
    const sub = getByTestId('message-sub');
    expect(title).toHaveTextContent(loserTitle);
    expect(sub).toHaveTextContent(loserMessage);
  });
  
})
