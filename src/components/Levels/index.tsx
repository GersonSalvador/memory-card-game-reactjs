import { ILevels } from "../../interfaces"
import Level from "./Level";

import { Container } from "./styles"

interface UlProps {
  levels?: ILevels[];
  isStarted: boolean;
};

function Levels({
  levels,
  isStarted,
}: UlProps) {
  return (
    <Container data-testid="levels">
      {levels?.map((level, index) => (
        <Level
          key={'li' + index}
          level={level}
          {...{ index }}
          isStarted={isStarted}
        />
      ))}
    </Container>
  )
}

export default Levels;