import { render, screen } from '@testing-library/react';
import Dashboard from './';

// function Button(){
//   return <button data-testid="button-test">exemplo</button>
// }

describe('Dashboard Page', () => {

  it('renders on screen ', () => {
    render(<Dashboard />);
    const dashboardElement = screen.getByTestId('dashboard');
    expect(dashboardElement).toBeInTheDocument();
  });

  // it("should render it's children", () => {
  //   render(<Dashboard><Button /></Dashboard>);
  //   const buttonElement = screen.getByTestId('button-test');
  //   expect(buttonElement).toBeInTheDocument();
  // })

})
