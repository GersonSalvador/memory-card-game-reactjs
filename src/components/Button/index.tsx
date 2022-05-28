import { ReactNode } from "react";

import { Container } from "./styles"

interface ButtonProps{
  children: ReactNode | String;
}

function Button({children}: ButtonProps){
  return (
    <Container data-testid="btn">
      {children}
    </Container>
  )
}

export default Button;