import { ILevels } from "../../../interfaces"

import { Container, H3, Span } from "./styles";

interface LevelProps {
  level: ILevels;
  index: number;
}

function Level({ level: { name, pairs, levelSelected, setLevelSelected }, index }: LevelProps) {
  return (
    <Container
      data-testid="li"
      selected={levelSelected === index}
      onClick={() => setLevelSelected(index)}
    >
      {name && <H3>{name}</H3>}
      {pairs && <Span>{pairs}</Span>}
    </Container>
  )
}

export default Level;