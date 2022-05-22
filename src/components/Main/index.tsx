import { ReactNode } from "react";

import { Container, Section } from "./styles"

interface MainProps {
  children?: ReactNode;
};

function Main({children}: MainProps) {
  return (
    <Section>
      <Container data-testid="main">
        {children}
      </Container>
    </Section>
  )
}

export default Main;