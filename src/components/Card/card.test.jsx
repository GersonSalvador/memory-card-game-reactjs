import { render, fireEvent, act } from '@testing-library/react';
import Card from './';

describe('Card', () => {
  it('renders the card element', () => {
    const cardInfo = { cardIndex: 0, isSelected: false, isHidden: false };
    const wait = false;
    const setWait = jest.fn();
    const { getByTestId } = render(<Card
      cardInfo={cardInfo}
      waitFn={{wait, setWait}}
    />);
    const cardElement = getByTestId('card');
    expect(cardElement).toBeInTheDocument();
  });

  it('renders the card image elements', () => {
    const cardInfo = { cardIndex: 0, isSelected: false, isHidden: false };
    const wait = false;
    const setWait = jest.fn();
    const imgUrl = 'images/0.png';
    const { getByTestId } = render(<Card
      cardInfo={cardInfo}
      img={imgUrl}
      waitFn={{wait, setWait}}
    />);
    const cardImageElement = getByTestId('card-image');
    expect(cardImageElement).toBeInTheDocument();
    expect(cardImageElement).toHaveAttribute('src', imgUrl);
  });

  describe('Update states', () => {
    it('updates the pair state when the card is clicked', () => {
      const setAllCards = jest.fn();
      const setPair = jest.fn();
      const cardInfo = { cardIndex: 0, isSelected: false, isHidden: false };
      const wait = false;
      const setWait = jest.fn();
      const allCards = [cardInfo];
      const { getByTestId } = render(<Card
        cardInfo={cardInfo}
        cardSequence={0}
        allCards={allCards}
        setAllCards={setAllCards}
        pair={[]}
        setPair={setPair}
        waitFn={{wait, setWait}}
      />);
      const cardElement = getByTestId('card');
      fireEvent.click(cardElement);
      expect(setPair).toHaveBeenCalledWith([0]);
    });

    it('updates the allCards state when the selected cards are a pair', () => {
      const setAllCards = jest.fn();
      const setPair = jest.fn();
      const cardInfo = { cardIndex: 0, isSelected: false, isHidden: false };
      const wait = false;
      const setWait = jest.fn();
      const allCards = [cardInfo, cardInfo];
      const { getByTestId } = render(<Card
        cardInfo={cardInfo}
        cardSequence={0}
        allCards={allCards}
        setAllCards={setAllCards}
        pair={[0]}
        setPair={setPair}
        waitFn={{wait, setWait}}
      />);
      const cardElement = getByTestId('card');
      fireEvent.click(cardElement);
      const expectedCardInfo = {...cardInfo, isSelected: true, isHidden: true};
      setTimeout(() => {
        expect(setAllCards).toHaveBeenCalled(2);
        expect(setAllCards).toHaveBeenCalledWith([expectedCardInfo, expectedCardInfo]);
      }, 1000);
    });

    it('updates the allCards state when the selected cards are not a pair', () => {
      const setAllCards = jest.fn();
      const setPair = jest.fn();
      const cardInfo = { cardIndex: 1, isSelected: false, isHidden: false };
      const wait = false;
      const setWait = jest.fn();
      const allCards = [cardInfo];
      const { getByTestId } = render(
        <Card
          setAllCards={setAllCards}
          setPair={setPair}
          allCards={allCards}
          cardInfo={cardInfo}
          pair={[0]}
          waitFn={{wait, setWait}}
        />
      );
      const cardElement = getByTestId('card');
      fireEvent.click(cardElement);
      setTimeout(() => {
        expect(setAllCards).toHaveBeenCalled(2);
        expect(setAllCards).toHaveBeenCalledWith([cardInfo]);
      }, 1000);
    });

    it('updates the setWait state when the selected cards are not a pair', () => {
      const setAllCards = jest.fn();
      const setPair = jest.fn();
      const cardInfo = { cardIndex: 0, isSelected: false, isHidden: false };
      const wait = false;
      const setWait = jest.fn();
      const allCards = [cardInfo, cardInfo];
      const { getByTestId } = render(<Card
        cardInfo={cardInfo}
        cardSequence={0}
        allCards={allCards}
        setAllCards={setAllCards}
        pair={[1]}
        setPair={setPair}
        waitFn={{wait, setWait}}
      />);
      const cardElement = getByTestId('card');
      fireEvent.click(cardElement);
      expect(setWait).toHaveBeenCalledWith(true);
      setTimeout(() => {
        expect(setWait).toHaveBeenCalled(2);
        expect(setWait).toHaveBeenCalledWith(false);
      }, 1000);
    });

    it('updates the setWait state when the selected cards are a pair', () => {
      const setAllCards = jest.fn();
      const setPair = jest.fn();
      const cardInfo = { cardIndex: 0, isSelected: false, isHidden: false };
      const wait = false;
      const setWait = jest.fn();
      const allCards = [cardInfo, cardInfo];
      const { getByTestId } = render(<Card
        cardInfo={cardInfo}
        cardSequence={0}
        allCards={allCards}
        setAllCards={setAllCards}
        pair={[0]}
        setPair={setPair}
        waitFn={{wait, setWait}}
      />);
      const cardElement = getByTestId('card');
      fireEvent.click(cardElement);
      expect(setWait).toHaveBeenCalledWith(true);
      setTimeout(() => {
        expect(setWait).toHaveBeenCalled(2);
        expect(setWait).toHaveBeenCalledWith(false);
      }, 1000);
    });

    it('should not update the pair and allCards states when the card is clicked and the wait state is true', () => {
      const setAllCards = jest.fn();
      const setPair = jest.fn();
      const cardInfo = { cardIndex: 0, isSelected: false, isHidden: false };
      const wait = true;
      const setWait = jest.fn();
      const allCards = [cardInfo];
      const { getByTestId } = render(<Card
        cardInfo={cardInfo}
        cardSequence={0}
        allCards={allCards}
        setAllCards={setAllCards}
        pair={[]}
        setPair={setPair}
        waitFn={{wait, setWait}}
      />);
      const cardElement = getByTestId('card');
      fireEvent.click(cardElement);
      expect(setPair).not.toHaveBeenCalled();
      expect(setAllCards).not.toHaveBeenCalled();
    });

    it('should not update the pair and allCards states when the card is clicked and is allready selected', () => {
      const setAllCards = jest.fn();
      const setPair = jest.fn();
      const cardInfo = { cardIndex: 0, isSelected: true, isHidden: false };
      const wait = false;
      const setWait = jest.fn();
      const allCards = [cardInfo];
      const { getByTestId } = render(<Card
        cardInfo={cardInfo}
        cardSequence={0}
        allCards={allCards}
        setAllCards={setAllCards}
        pair={[]}
        setPair={setPair}
        waitFn={{wait, setWait}}
      />);
      act(() => {
        })
        const cardElement = getByTestId('card');
        fireEvent.click(cardElement);
        expect(setPair).not.toHaveBeenCalled();
        expect(setAllCards).not.toHaveBeenCalled();
      });
    
    it('should not update the pair and allCards states when the card is clicked and it is hidden', () => {
      const setAllCards = jest.fn();
      const setPair = jest.fn();
      const cardInfo = { cardIndex: 0, isSelected: false, isHidden: true };
      const wait = false;
      const setWait = jest.fn();
      const allCards = [cardInfo];
      const { getByTestId } = render(<Card
        cardInfo={cardInfo}
        cardSequence={0}
        allCards={allCards}
        setAllCards={setAllCards}
        pair={[]}
        setPair={setPair}
        waitFn={{wait, setWait}}
      />);
      const cardElement = getByTestId('card');
      fireEvent.click(cardElement);
      expect(setPair).not.toHaveBeenCalled();
      expect(setAllCards).not.toHaveBeenCalled();
    });
  });

});
