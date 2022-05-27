import { Container } from "./styles"
import {ILevels} from "../../interfaces"
import Level from "./Level";
interface UlProps {
  levels?: ILevels[]
};

function Levels({levels}: UlProps) {
  return (
    <Container data-testid="ul">
      {levels?.map((level, index) => (
        <Level key={'li'+index} level={level} />
      ))}
    </Container>
  )
}

export default Levels;