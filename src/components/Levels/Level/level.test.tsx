import { render, screen } from '@testing-library/react';
import { useState } from 'react';
import Level from '.';


function renderLevel() {
  function LevelRender() {

    const [levelSelected, setLevelSelected] = useState(0)

    return <Level
      level={{ name: 'level one', pairs: 10, levelSelected, setLevelSelected }}
      index={0}
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

  it("should render it's props", () => {
    renderLevel();
    const props = screen.getByText('level one');
    expect(props).toHaveTextContent('level one');
  })

})
