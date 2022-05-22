import { ReactNode } from "react";

import { Container } from "./styles"

interface MainProps {
  children?: ReactNode;
};

function Main({children}: MainProps) {
  return (
    <section>
      <Container data-testid="main">
        {children}
      </Container>
    </section>
  )
}

export default Main;