import { render, screen } from '@testing-library/react';
import Dashboard from './';

describe('Dashboard Page', () => {

  it('renders on screen ', () => {
    render(<Dashboard />);
    const component = screen.getByTestId('dashboard');
    expect(component).toBeInTheDocument();
  });

})
