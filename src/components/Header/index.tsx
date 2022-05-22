import { Title } from "../"

interface HeaderProps {
  children?: string;
};

function Header({children}: HeaderProps) {
  return (
    <div data-testid="header">
      <Title>
        {children}
      </Title>
    </div>
  )
}

export default Header;