import { ILevelsName } from "../interfaces"

export const levels = {
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
export function getLevelConfig(level: ILevelsName){
  return levels[level]
}