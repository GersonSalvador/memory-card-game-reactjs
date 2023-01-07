import { useState, useEffect } from "react";
import { useStopwatch } from 'react-timer-hook';

import { Header, Main, Levels, Counter } from "../../components"
import Board from "../../components/Board";
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

  const {
    seconds,
    minutes,
    hours,
    start
  }  = useStopwatch({ autoStart: false })

  useEffect(() => {
    if(isStarted)
      start()
  }, [isStarted])

  return (
    <div data-testid="dashboard">
      <Header>
        Memory Game
      </Header>
      <Main>
        <Levels levels={levels} />
        <Counter
          timing={{ hours, minutes, seconds }}
          started={{ isStarted, setIsStarted }}
        />
        {isStarted && <Board boardWidth={600} pairsOfCards={6}/>}
      </Main>
    </div>
  )
}