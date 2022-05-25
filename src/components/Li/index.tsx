import {Container, H3, Span} from "./styles";
import {ILevels} from "../../interfaces"

interface LiProps {
  level?: ILevels;
}

function Li({level}: LiProps) {
  return (
    <Container data-testid="li">
      {level?.name && <H3>{level?.name}</H3>}
      {level?.pairs && <Span>{level?.pairs}</Span>}
    </Container>
  )
}

export default Li;