import { render, screen } from '@testing-library/react';
import Dashboard from './';


describe('Dashboard Page', () => {

  function makeSut() {
    render(<Dashboard />);
  }

  it('renders on screen ', () => {
    makeSut()
    const component = screen.getByTestId('dashboard');
    expect(component).toBeInTheDocument();
  });

  it('shoukd have 4 levels', () => {
    makeSut()
    const component = screen.getByTestId('levels')
    expect(component.childNodes.length).toEqual(4);
  })

})
