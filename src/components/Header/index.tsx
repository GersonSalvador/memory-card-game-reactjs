import { ReactNode } from "react"

interface HeaderProps {
  children?: ReactNode;
};

function Header({children}: HeaderProps) {
  return (
    <div data-testid="header">
      {children}
    </div>
  )
}

export default Header;