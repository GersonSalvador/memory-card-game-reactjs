import { render } from '@testing-library/react';
import ScoreBoard from '.';

describe('', () => {
  const makeSut = () => {
    const time = {
      seconds: 0,
      minutes: 0,
      hours: 0,
    }
    return render(<ScoreBoard isStarted
      isWon
      time={time}/>)
  }

  it('should render on screen', () => {
    const {getByTestId} = makeSut()
    expect(getByTestId('score-board')).toBeInTheDocument()
  })
})