import { render, screen } from '@testing-library/react';
import Level from '.';


function renderLevel() {
  const setLevelSelected = jest.fn()

  function LevelRender() {
    const levelSelected = 0

    return <Level
      level={{ name: 'easy', pairs: 10, levelSelected, setLevelSelected }}
      index={0}
      isStarted={false}
    />
  }
  return {
    render: render(<LevelRender />),
    setLevelSelected,
  };
}

describe('Level component', () => {

  it('renders on screen', () => {
    renderLevel();
    const component = screen.getByTestId('level');
    expect(component).toBeInTheDocument();
  });

  it("should render it's level name", () => {
    renderLevel();
    const props = screen.getByText('easy');
    expect(props).toHaveTextContent('easy');
  })

  it("should render it's level description", () => {
    renderLevel();
    const props = screen.getByText('10 pairs');
    expect(props).toHaveTextContent('10 pairs');
  })

  it('shold not call setLevelSelected when isStarted is true', () => {
    const { setLevelSelected } = renderLevel();
    const component = screen.getByTestId('level');
    component.click();
    setTimeout(() => {
      expect(setLevelSelected).not.toHaveBeenCalled();
    }, 1000)
  });

})
