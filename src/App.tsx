import { useEffect, useState } from 'react';
import './App.css';
import { playedrivers } from './drivers'
import { Driver, DriverCategory } from './types';

import { Team } from './components/Team/Team';
import { shuffle } from './utils/shuffle';


type DriverWithTeam = Driver & {
  onTeam: boolean
}

function App() {
  const [players, setPlayers] = useState<DriverWithTeam[]>(playedrivers.map(d => ({
    ...d,
    onTeam: false
  })))
  const [teams, setTeams] = useState<DriverWithTeam[][]>([])

  const randomPlayer = (category: DriverCategory) => {
    const [first] = shuffle(
      players.filter(({ onTeam }) => !onTeam)
        .filter(p => p.category === category)
    )

    return first
  }

  const findTeam = () => {
    const left = players.filter(({ onTeam }) => !onTeam)

    if (left.length === 0) { return }

    const pro = randomPlayer('PRO') ?? { category: 'PRO', name: '', times: [], total: '' }
    const am = randomPlayer('AM') ?? { category: 'AM', name: '', times: [], total: '' }


    setPlayers([
      ...players.filter(({ name }) => name !== pro.name)
        .filter(({ name }) => name !== am.name),
      { ...pro, onTeam: true },
      { ...am || {}, onTeam: true }
    ])

    setTeams([...teams, [pro, am]])
  }

  const reset = () => {
    setTeams([])
    setPlayers(playedrivers.map(d => ({ ...d, onTeam: false })))
  }

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
