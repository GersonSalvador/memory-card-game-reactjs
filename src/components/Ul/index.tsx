import { Container } from "./styles"
import {ILevels} from "../../interfaces"
interface UlProps {
  levels?: ILevels[]
};

function Ul({levels}: UlProps) {
  return (
    <Container data-testid="ul">
      {levels?.map(({name, pairs}, index) => <li key={'li'+index}>{name + ' Pairs ' + pairs}</li>)}
    </Container>
  )
}

export default Ul;