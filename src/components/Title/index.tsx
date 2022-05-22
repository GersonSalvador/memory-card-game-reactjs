import { H1 } from "./styles"

interface TitleProps {
  children?: string;
};

function Title({children}: TitleProps) {
  return (
    <H1 data-testid="title">
      {children}
    </H1>
  )
}

export default Title;