import { render } from '@testing-library/react';

import Levels from '.';

function renderLevels() {
  const levelSelected = 1
  const setLevelSelected = jest.fn()

  return render(<Levels
    levels={[{ name: 'easy', pairs: 10, levelSelected, setLevelSelected }]}
    isStarted={false}
  />)
}

describe('Level component', () => {

  it('renders on screen', () => {
    const {getByTestId} = renderLevels();
    const component = getByTestId('levels');
    expect(component).toBeInTheDocument();
  });

  it("should render it's props", () => {
    const {getByText} = renderLevels();
    const props = getByText('easy');
    expect(props).toHaveTextContent('easy');
  })

})
