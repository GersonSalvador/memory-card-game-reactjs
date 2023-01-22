import { useState, useEffect } from "react";
import { useStopwatch } from 'react-timer-hook';

import { Header, Main, Levels, Counter } from "../../components"
import Board from "../../components/Board";
import {getLevelConfig} from "../../utils/getLevelConfig";
import { ILevels } from "../../interfaces"
import MessageDisplay from "../../components/MessageDisplay";
import handleStoredScores, { Iscore } from "../../utils/handleStoredScores";
import ScoreBoard from "../../components/ScoreBoard";
import { Wrapper } from "./styles";

export default function Dashboard() {

  const [levelSelected, setLevelSelected] = useState(1);
  const [levelInfo, setLevelInfo] = useState({pairs: 0, width: 0});
  const [isStarted, setIsStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [isWon, setIsWon] = useState(false);
  const [scores, setScores] = useState<Iscore[]>([])

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
    start,
    pause,
    reset,
  }  = useStopwatch({ autoStart: false })

  useEffect(() => {
    if(isStarted){
      reset()
      start()
    }
  }, [isStarted])

  useEffect(() => {
    if(isFinished)
      pause()
    if(isWon && (hours > 0 || minutes > 0 || seconds > 0)){
      setScores(prev => [...prev, {player: 'Fake Name', time: {hours, minutes, seconds}}])
      setTimeout(() => {
        handleStoredScores.set(scores)
        reset()
      }, 100)
    }
  }, [isFinished])

  useEffect(() => {
    const levelName = levels.filter((l, index) => index === levelSelected)[0].name
    const level = getLevelConfig(levelName)
    setLevelInfo(level)
  }, [levelSelected])

  useEffect(() => {
    const scores = handleStoredScores.get()
    setScores(scores)
  }, [])

  return (
    <div data-testid="dashboard">
      <Header>
        Memory Game
      </Header>
      <Wrapper>
        <Main>
          <Levels levels={levels} isStarted={isStarted} />
          <Counter
            timing={{ hours, minutes, seconds }}
            started={{ isStarted, setIsStarted }}
            finished={{ isFinished, setIsFinished }}
            setIsWon={setIsWon}
            />
          {isStarted && <Board 
            levelInfo={levelInfo}
            setIsFinished={setIsFinished}
            setIsWon={setIsWon}
            setIsStarted={setIsStarted}
          />}
          {isFinished && <MessageDisplay won={isWon} />}
        </Main>
        <ScoreBoard 
          scores={scores}
        />
      </Wrapper>
    </div>
  )
}