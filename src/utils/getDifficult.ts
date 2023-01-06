import { ILevelsName } from "../interfaces"

export function getDifficult(difficult: ILevelsName){
  const difficults = {
    easy: {
      pairs: 6,
      width: 440
    },
    normal: {
      pairs: 10,
      width: 550
    },
    hard: {
      pairs: 15,
      width: 660
    },
    master: {
      pairs: 25,
      width: 890
    }
  }
  return difficults[difficult]
}