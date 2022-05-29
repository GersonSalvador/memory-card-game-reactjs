import React from "react";

export interface ILevels {
  name: string;
  pairs: number;
  levelSelected: number;
  setLevelSelected: React.Dispatch<React.SetStateAction<number>>
};