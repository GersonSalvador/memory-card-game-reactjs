import { render } from '@testing-library/react';
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { act } from 'react-dom/test-utils';
import Board from './';

describe('Board component', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  const renderMyComponent = () => {
    const setIsFinished = jest.fn();
    const setIsWon = jest.fn();
    const setIsStarted = jest.fn();
    return {
      render: render(<Board 
        levelInfo={{pairs: 1, width: 450}}
        setIsFinished={setIsFinished}
        setIsWon={setIsWon}
        setIsStarted={setIsStarted}
      />),
      setIsFinished,
      setIsWon,
      setIsStarted,
    };
  }

  it('renders on screen', () => {
    const {render: {getByTestId}} = renderMyComponent();
    const component = getByTestId('board');
    expect(component).toBeInTheDocument();
  });

  it('renders 1 pair of cards', () => {
    const  {render: {getAllByTestId}} = renderMyComponent();
    const cards = getAllByTestId('card');
    expect(cards.length).toBe(2);
  });

  it('should render Board with 450px width', () => {
    const setIsFinished = jest.fn();
    const setIsWon = jest.fn();
    const tree = renderer.create(<Board 
      levelInfo={{pairs: 1, width: 450}}
      setIsFinished={setIsFinished}
      setIsWon={setIsWon}
    />).toJSON();

    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('width', '450px');
  });

  describe('Update States', () => {

    it('should update isFinished, isWon and isStaerted states when all cards are matched', () => {
      const {
        render: {getAllByTestId}, 
        setIsFinished, 
        setIsWon,
        setIsStarted,
      } = renderMyComponent();
      const cards = getAllByTestId('card');
      act(() => {
        cards.forEach(card => {
          card.click();
        })
      });
      setTimeout(() => {
        expect(setIsFinished).toBeCalled(1);
        expect(setIsFinished).toBeCalledWith(true);
        expect(setIsWon).toBeCalled(1);
        expect(setIsWon).toBeCalledWith(true);
        expect(setIsStarted).toBeCalled(1);
        expect(setIsStarted).toBeCalledWith(false);
      }, 1000);
    });

  });
})