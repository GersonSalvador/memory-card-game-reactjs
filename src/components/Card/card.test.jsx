import { render, screen } from '@testing-library/react';
import Card from './';

describe('Card', () => {
  it('renders on screen', () => {
    render(<Card />);
    const component = screen.getByTestId('card');
    expect(component).toBeInTheDocument();
  });

  it("should render the given image", () => {
    const img = 'https://avatars.dicebear.com/api/bottts/1.svg'
    render(<Card img={img}/>);
    const component = screen.getByTestId('card-image');
    expect(component).toHaveAttribute('src', img)
  })
})