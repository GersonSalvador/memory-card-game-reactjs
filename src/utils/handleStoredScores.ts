export interface Iscore{
  player: string;
  time: {
    seconds: number;
    minutes: number;
    hours: number;
  }
}

const handleStoredScores = {

  get: () => {
    const scores = localStorage.getItem('memory-game-scores')
    if(!scores)
      return []
    return JSON.parse(scores)
  },
  set: (scores: Iscore[]) => {
    const jsonScores = JSON.stringify(scores)
    localStorage.setItem('memory-game-scores', jsonScores)
  }
}
export default handleStoredScores