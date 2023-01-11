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

  it('should render Header', () => {
    const {getByTestId} = makeSut()
    const component = getByTestId('header');
    expect(component).toBeInTheDocument();
  })

  it('should have 4 levels', () => {
    const {getByTestId} = makeSut()
    const component = getByTestId('levels')
    expect(component).toBeInTheDocument();
    expect(component.childNodes.length).toEqual(4);
  })

  it('should have 1 counter', () => {
    const {getByTestId} = makeSut()
    const component = getByTestId('counter')
    expect(component).toBeInTheDocument();
  })

  it('should have 1 Counter', () => {
    const {getByTestId} = makeSut()
    const component = getByTestId('counter')
    expect(component).toBeInTheDocument();
  })
})
