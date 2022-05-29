import { useState } from 'react';
import { render, screen } from '@testing-library/react';

import Levels from '.';

function renderLevels() {
  function LevelRender() {

    const [levelSelected, setLevelSelected] = useState(0)

    return <Levels
      levels={[{ name: 'level one', pairs: 10, levelSelected, setLevelSelected }]}
    />
  }
  render(<LevelRender />);
}

describe('Level component', () => {

  it('renders on screen', () => {
    renderLevels();
    const component = screen.getByTestId('ul');
    expect(component).toBeInTheDocument();
  });

  it("should render it's props", () => {
    renderLevels();
    const props = screen.getByText('level one');
    expect(props).toHaveTextContent('level one');
  })

})
