import React from "react";

import { ILevels } from "../../interfaces"
import Level from "./Level";

import { Container } from "./styles"

interface UlProps {
  levels?: ILevels[];
};

function Levels({
  levels,
}: UlProps) {
  return (
    <Container data-testid="levels">
      {levels?.map((level, index) => (
        <Level
          key={'li' + index}
          level={level}
          {...{ index }}
        />
      ))}
    </Container>
  )
}

export default Levels;