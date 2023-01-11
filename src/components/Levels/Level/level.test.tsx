import { render, screen } from '@testing-library/react';
import { useState } from 'react';
import Level from '.';


function renderLevel() {
  function LevelRender() {

    const [levelSelected, setLevelSelected] = useState(0)

    return <Level
      level={{ name: 'easy', pairs: 10, levelSelected, setLevelSelected }}
      index={0}
      isStarted={false}
    />
  }
  render(<LevelRender />);
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

})
