import React from "react";

export interface ILevels {
  name: ILevelsName;
  pairs: number;
  levelSelected: number;
  setLevelSelected: React.Dispatch<React.SetStateAction<number>>
};

export type ILevelsName = 'easy' | 'normal' | 'hard' | 'master';