import { ILevels } from "../../../interfaces"

import { Container, H3, Span } from "./styles";

interface LevelProps {
  level: ILevels;
  index: number;
  isStarted: boolean;
}

function Level({ 
  level: { name, pairs, levelSelected, setLevelSelected }, 
  index,
  isStarted,
}: LevelProps) {
  return (
    <Container
      data-testid="level"
      data-selected={levelSelected === index}
      selected={levelSelected === index}
      onClick={() => !isStarted && setLevelSelected(index)}
    >
      {name && <H3>{name}</H3>}
      {pairs && <Span>{pairs} pairs</Span>}
    </Container>
  )
}

export default Level;