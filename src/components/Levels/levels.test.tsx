import { render } from '@testing-library/react';

import Levels from '.';

function renderLevels() {
  const levelSelected = 0
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

  it('should have 1 children', () => {
    const {getByTestId} = renderLevels();
    const component = getByTestId('levels');
    expect(component.children.length).toBe(1);
  })

  it('should have 1 selected level', () => {
    const { container } = renderLevels()
    const component = container.querySelector('[data-selected="true"]')
    expect(component).toBeInTheDocument();
  })

})
