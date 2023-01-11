import { render } from '@testing-library/react';
import Dashboard from './';


describe('Dashboard Page', () => {

  function makeSut() {
    return render(<Dashboard />);
  }

  it('renders on screen ', () => {
    const {getByTestId} = makeSut()
    const component = getByTestId('dashboard');
    expect(component).toBeInTheDocument();
  });

  it('should have 4 levels', () => {
    const {getByTestId} = makeSut()
    const component = getByTestId('levels')
    expect(component.childNodes.length).toEqual(4);
  })

  it('should have 1 selected level', () => {
    const { container } = makeSut()
    const component = container.querySelector('[data-selected="true"]')
    expect(component).toBeInTheDocument();
  })
})
