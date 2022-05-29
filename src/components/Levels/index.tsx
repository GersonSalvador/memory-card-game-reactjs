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
    <Container data-testid="ul">
      {levels?.map((level, index) => (
        <Level
          key={'li' + index}
          level={level}
        />
      ))}
    </Container>
  )
}

export default Levels;