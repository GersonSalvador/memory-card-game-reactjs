import { Container } from "./styles"
import {ILevels} from "../../interfaces"
import { Li } from "../";
interface UlProps {
  levels?: ILevels[]
};

function Ul({levels}: UlProps) {
  return (
    <Container data-testid="ul">
      {levels?.map((level, index) => (
        <Li key={'li'+index} level={level} />
      ))}
    </Container>
  )
}

export default Ul;