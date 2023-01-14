import { render } from '@testing-library/react';
import Button from '.';

describe('Button component', () => {

  interface ImakeSut{
    btnText?: string
    handler?: jest.Mock<any, any>;
  }
  const makeSut = ({handler,btnText}: ImakeSut ) => {

    return render(
      <Button 
        dataTestId='btn' 
        clickHandler={() => handler && handler()}
      >
        {btnText && btnText}
      </Button>
    );
  }

  it('renders on screen', () => {
    const {getByTestId} = makeSut({})
    const btn = getByTestId('btn');
    expect(btn).toBeInTheDocument();
  });

  it("should render it's children", () => {
    const btnText = "Button Text"
    const {getByTestId} = makeSut({btnText})
    const btn = getByTestId('btn');

    expect(btn).toBeInTheDocument()
    expect(btn).toHaveTextContent(btnText);
  })

  it('should call clickHandler function on click', () => {
    const handler = jest.fn()
    const {getByTestId} = makeSut({handler});
    const btn = getByTestId('btn');
    btn.click()
    expect(handler).toHaveBeenCalledTimes(1)
  })

})
