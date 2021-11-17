import { TeamPlayers } from '../../types'
import { Player } from '../Player/Player'
import './team.css'


interface Props extends TeamPlayers {
    num: number
}

export const Team = ({ am, pro, num }: Props) => {
    return (
        <div className="team-wrapper">
            <div>
                <h1>{num < 10 ? ' ' + num : num}</h1>
            </div>
            <div className="team">
                <Player {...pro} />
                <Player {...am} />
            </div>
        </div>
    )
}
