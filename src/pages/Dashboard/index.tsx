import { Header, Main, Levels } from "../../components"
import { ILevels } from "../../interfaces"

const levels: ILevels[] = [
  {name: 'Easy',pairs: 6},
  {name: 'Normal', pairs: 10},
  {name: 'Hard', pairs: 15},
  {name: 'Master', pairs: 25},
]

export default function Dashboard() {
  return (
    <div data-testid="dashboard">
      <Header>
        Memory Card Game
      </Header>
      <Main>
        <Levels levels={levels}/>
      </Main>
    </div>
  )
}