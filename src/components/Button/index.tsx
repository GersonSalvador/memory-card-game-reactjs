import { ReactNode } from "react";

import { Container } from "./styles"

interface ButtonProps{
  children?: ReactNode | String;
  clickHandler?: () => void;
  dataTestId: string;
}

function Button({children, clickHandler, dataTestId}: ButtonProps){
  return (
    <Container
      data-testid={dataTestId}
      onClick={() => clickHandler && clickHandler()}
    >
      {children && children}
    </Container>
  )
}

export default Button;