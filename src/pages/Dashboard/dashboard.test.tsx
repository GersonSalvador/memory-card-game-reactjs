import { render, screen } from '@testing-library/react';
import App from '../../App';

test('renders learn react link', () => {
  render(<App />);
  const dashboardElement = screen.getByTestId('dashboard');
  expect(dashboardElement).toBeInTheDocument();
});
