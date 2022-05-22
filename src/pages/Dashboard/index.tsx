import { ReactNode } from "react"
interface DashboardProps {
  children?: ReactNode;
};

export default function Dashboard({children}: DashboardProps) {
  return (
    <div data-testid="dashboard">
      {children}
    </div>
  )
}