import { render, screen } from '@testing-library/react';
import Board from './';

describe('Board component', () => {

  it('renders on screen', () => {
    render(<Board levelInfo={{pairs: 10, width: 450}}/>);
    const component = screen.getByTestId('board');
    expect(component).toBeInTheDocument();
  });

})