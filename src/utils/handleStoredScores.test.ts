import handleStoredScores from "./handleStoredScores";

describe('Handle Stored Scores', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should set and get stored scores', () => {
    const scores = [
      {player: 'player1', time: {seconds: 10, minutes: 0, hours: 0}},
    ]
    jest.spyOn(handleStoredScores, 'set')
    jest.spyOn(handleStoredScores, 'get')
    expect(handleStoredScores.get()).toEqual([])
    handleStoredScores.set(scores)
    expect(handleStoredScores.get()).toEqual(scores)
  })
})