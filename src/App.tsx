import { useCallback, useState } from 'react';
// import Webcam from 'react-webcam'
import './App.css';
import { playedrivers } from './drivers'
import { Driver, DriverCategory } from './types';

import shuffle from 'lodash.shuffle'
import { Team } from './components/Team/Team';

type DriverWithTeam = Driver & {
  onTeam: boolean
}

function App() {
  const [players, setPlayers] = useState<DriverWithTeam[]>(playedrivers.map(d => ({
    ...d,
    onTeam: false
  })))
  const [teams, setTeams] = useState<DriverWithTeam[][]>([])

  const playersNotOnATeam = useCallback((category: DriverCategory) => players.filter(({ onTeam }) => !onTeam).filter(p => p.category === category), [players])
  const randomPlayer = useCallback((players: DriverWithTeam[]) => {
    const [first] = shuffle(players)
    return first
  }, [])

  const assignPlayerToTeam = useCallback((p: DriverWithTeam) => {
    const x = players.filter(x => x.name !== p.name)
    const d = [...x, { ...p, onTeam: true }]
    console.log(d);

    setPlayers(d)
  }, [players])


  const findTeam = useCallback(() => {
    const pro = randomPlayer(playersNotOnATeam('PRO'))
    const am = randomPlayer(playersNotOnATeam('AM'))
    if (!pro || !am) { return }

    assignPlayerToTeam(pro)
    assignPlayerToTeam(am)

    setTeams([...teams, [pro, am]])
  }, [assignPlayerToTeam, playersNotOnATeam, randomPlayer, teams])

  const reset = useCallback(() => {
    setTeams([])
    setPlayers(playedrivers.map(d => ({ ...d, onTeam: false })))
  }, [setTeams])

  return (
    <div className="App">
      <button onClick={() => findTeam()}>Find team</button>
      <button onClick={() => reset()}>Reset</button>
      <div id="teams">
        {teams.map(([pro, am], index) => <Team key={index} num={index + 1} am={am} pro={pro} />)}
      </div>
    </div >
  );
}

export default App;
