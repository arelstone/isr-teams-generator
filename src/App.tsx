import { useCallback, useMemo, useState } from 'react';
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
  const [team, setTeam] = useState<DriverWithTeam[][]>([])

  const playersNotOnATeam = useCallback((category: DriverCategory) => players.filter(({ onTeam }) => !onTeam).filter(p => p.category === category), [players])
  // const proPlayersNotOnATeam = useMemo(() => playersNotOnATeam.filter(({ category }) => category === 'PRO'), [playersNotOnATeam])
  // const amPlayersNotOnATeam = useMemo(() => playersNotOnATeam.filter(({ category }) => category === 'PRO'), [playersNotOnATeam])
  const randomPlayer = useCallback((players: DriverWithTeam[]) => {
    const [first] = shuffle(players)
    // if (!first) throw new Error('All players has been assigned to a team')
    return first
  }, [])

  const assignPlayerToTeam = useCallback((p: DriverWithTeam) => {
    // console.log('assignPlayerToTeam: ', p);
    const x = players.filter(x => x.name !== p.name)
    const d = [...x, { ...p, onTeam: true }]
    console.log(d);

    setPlayers(d)
  }, [players])


  const findTeam = () => {
    const pro = randomPlayer(playersNotOnATeam('PRO'))
    const am = randomPlayer(playersNotOnATeam('AM'))
    if (!pro || !am) { return }

    assignPlayerToTeam(pro)
    assignPlayerToTeam(am)

    setTeam([...team, [pro, am]])
  }

  return (
    <div className="App">
      <button onClick={() => findTeam()}>Find team</button>

      {team.map(([pro, am], index) => <Team key={index} num={index + 1} am={am} pro={pro} />)}
    </div >
  );
}

export default App;
