interface TitleProps {
  children?: string;
};

function Title({children}: TitleProps) {
  return (
    <h1 data-testid="title">
      {children}
    </h1>
  )
}

export default Title;