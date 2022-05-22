import { Container } from "./styles"

interface UlProps {
  levels?: {
    name: string;
    pairs: number;
  }[];
};

function Ul({levels}: UlProps) {
  return (
    <Container data-testid="ul">
      {levels?.map(({name, pairs}, index) => <li key={'li'+index}>{name + ' Pairs ' + pairs}</li>)}
    </Container>
  )
}

export default Ul;