import {Container, H3, Span} from "./styles";
import {ILevels} from "../../../interfaces"

interface LevelProps {
  level?: ILevels;
}

function Level({level}: LevelProps) {
  return (
    <Container data-testid="li">
      {level?.name && <H3>{level?.name}</H3>}
      {level?.pairs && <Span>{level?.pairs}</Span>}
    </Container>
  )
}

export default Level;