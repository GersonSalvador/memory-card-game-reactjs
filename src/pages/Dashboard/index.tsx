import { useState } from "react";

import { Header, Main, Levels, Counter } from "../../components"
import { ILevels } from "../../interfaces"

export default function Dashboard() {

  const [levelSelected, setLevelSelected] = useState(1);
  const [isStarted, setIsStarted] = useState(false);

  const levels: ILevels[] = [
    { name: 'easy', pairs: 6, levelSelected, setLevelSelected },
    { name: 'normal', pairs: 10, levelSelected, setLevelSelected },
    { name: 'hard', pairs: 15, levelSelected, setLevelSelected },
    { name: 'master', pairs: 25, levelSelected, setLevelSelected },
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