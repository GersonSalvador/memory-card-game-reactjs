import { render, screen } from '@testing-library/react';
import Dashboard from './';


describe('Dashboard Page', () => {

  function makeSut() {
    return render(<Dashboard />);
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

  it('shoukd have 1 selected level', () => {
    const { container } = makeSut()
    const component = container.querySelector('[data-selected="true"]')
    expect(component).toBeInTheDocument();
  })

})
