import { useState } from "react";

import { Header, Main, Levels, Counter } from "../../components"
import { ILevels } from "../../interfaces"

export default function Dashboard() {

  const [levelSelected, setLevelSelected] = useState(1);
  const [isStarted, setIsStarted] = useState(false);

  const levels: ILevels[] = [
    { name: 'Easy', pairs: 6, levelSelected, setLevelSelected },
    { name: 'Normal', pairs: 10, levelSelected, setLevelSelected },
    { name: 'Hard', pairs: 15, levelSelected, setLevelSelected },
    { name: 'Master', pairs: 25, levelSelected, setLevelSelected },
  ]

  return (
    <div data-testid="dashboard">
      <Header>
        Memory Card Game
      </Header>
      <Main>
        <Levels levels={levels} />
        <Counter
          timing={{ hour: 0, minute: 0, second: 0 }}
          started={{ isStarted, setIsStarted }}
        />
      </Main>
    </div>
  )
}