import { Title } from "../"
import { Container } from "./styles"

interface HeaderProps {
  children?: string;
};

function Header({children}: HeaderProps) {
  return (
    <Container data-testid="header">
      <Title>
        {children}
      </Title>
    </Container>
  )
}

export default Header;