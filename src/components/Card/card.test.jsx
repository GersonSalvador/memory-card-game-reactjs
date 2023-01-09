import { render, fireEvent } from '@testing-library/react';
import Card from './';

describe('Card', () => {
  it('renders the card element', () => {
    const cardInfo = { cardIndex: 0, isSelected: false, isHidden: false };
    const { getByTestId } = render(<Card cardInfo={cardInfo} />);
    const cardElement = getByTestId('card');
    expect(cardElement).toBeInTheDocument();
  });

  it('renders the card image elements', () => {
    const cardInfo = { cardIndex: 0, isSelected: false, isHidden: false };
    const imgUrl = 'images/0.png';
    const { getByTestId } = render(<Card
      cardInfo={cardInfo}
      img={imgUrl}
    />);
    const cardImageElement = getByTestId('card-image');
    expect(cardImageElement).toBeInTheDocument();
    expect(cardImageElement).toHaveAttribute('src', imgUrl);
  });

  it('updates the pair state when the card is clicked', () => {
    const setAllCards = jest.fn();
    const setPair = jest.fn();
    const cardInfo = { cardIndex: 0, isSelected: false, isHidden: false };
    const allCards = [cardInfo];
    const { getByTestId } = render(<Card
      cardInfo={cardInfo}
      cardSequence={0}
      allCards={allCards}
      setAllCards={setAllCards}
      pair={[]}
      setPair={setPair}
    />);
    const cardElement = getByTestId('card');
    fireEvent.click(cardElement);
    expect(setPair).toHaveBeenCalledWith([0]);
  });

  it('updates the allCards state when the selected cards are a pair', () => {
    const setAllCards = jest.fn();
    const setPair = jest.fn();
    const cardInfo = { cardIndex: 0, isSelected: false, isHidden: false };
    const allCards = [cardInfo, cardInfo];
    const { getByTestId } = render(<Card
      cardInfo={cardInfo}
      cardSequence={0}
      allCards={allCards}
      setAllCards={setAllCards}
      pair={[0]}
      setPair={setPair}
    />);
    const cardElement = getByTestId('card');
    fireEvent.click(cardElement);
    const expectObj = expect.objectContaining({cardIndex: 0, isSelected: true, isHidden: true})
    const expectArr = expect.arrayContaining([expectObj,expectObj])
    expect(setAllCards).toHaveBeenCalledWith(expectArr);
  });

  it('updates the allCards state when the selected cards are not a pair', () => {
    const setAllCards = jest.fn();
    const setPair = jest.fn();
    const cardInfo = { cardIndex: 1, isSelected: false, isHidden: false };
    const allCards = [cardInfo];
    const { getByTestId } = render(
      <Card
        setAllCards={setAllCards}
        setPair={setPair}
        allCards={allCards}
        cardInfo={cardInfo}
        pair={[0]}
      />
    );
    const cardElement = getByTestId('card');
    fireEvent.click(cardElement);
    expect(setAllCards).toHaveBeenCalledWith(expect.arrayContaining([expect.objectContaining({cardIndex: 1, isSelected: true, isHidden: true})]));
  });
})