import { render } from '@testing-library/react';
import ScoreBoard from '.';

describe('', () => {
  const makeSut = () => {
    const scores = [{
      player: 'Fake Name',
      time: {
        seconds: 2,
        minutes: 1,
        hours: 0,
      }
    }]
    const props = {
      scores
    }
    return render(<ScoreBoard {...props}/>)
  }

  it('should render on screen', () => {
    const {getByTestId} = makeSut()
    expect(getByTestId('score-board')).toBeInTheDocument()
  })

  it('should have 1 score on the board list', () => {
    const {getAllByTestId} = makeSut()
    const scores = getAllByTestId('score')
    expect(scores.length).toBe(1)
  })

})