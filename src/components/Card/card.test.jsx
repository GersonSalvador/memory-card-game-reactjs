import { render, fireEvent } from '@testing-library/react';
import Card from './';

describe('Card', () => {
  it('renders the card and card image elements', () => {
    const setAllCards = jest.fn();
    const setPair = jest.fn();
    const cardInfo = { cardIndex: 0, isSelected: false, isHidden: false };
    const allCards = [cardInfo];
    const { getByTestId } = render(<Card
      img={''}
      cardInfo={cardInfo}
      cardSequence={0}
      allCards={allCards}
      setAllCards={setAllCards}
      key={`img-0`}
      pair={[]}
      setPair={setPair}
      isHidden={false}
    />);
    const cardElement = getByTestId('card');
    const cardImageElement = getByTestId('card-image');
    expect(cardElement).toBeInTheDocument();
    expect(cardImageElement).toBeInTheDocument();
  });

  it('updates the pair state when the card is clicked', () => {const setAllCards = jest.fn();
    const setPair = jest.fn();
    const cardInfo = { cardIndex: 0, isSelected: false, isHidden: false };
    const allCards = [cardInfo];
    const { getByTestId } = render(<Card
      img={''}
      cardInfo={cardInfo}
      cardSequence={0}
      allCards={allCards}
      setAllCards={setAllCards}
      key={`img-0`}
      pair={[]}
      setPair={setPair}
      isHidden={false}
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
      img={''}
      cardInfo={cardInfo}
      cardSequence={0}
      allCards={allCards}
      setAllCards={setAllCards}
      key={`img-0`}
      pair={[0]}
      setPair={setPair}
      isHidden={false}
    />);
    const cardElement = getByTestId('card');
    fireEvent.click(cardElement);
    expect(setAllCards).toHaveBeenCalledWith(expect.arrayContaining([expect.objectContaining({cardIndex: 0, isSelected: true, isHidden: true})]));
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