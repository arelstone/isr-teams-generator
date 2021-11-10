import { TeamPlayers } from '../../types'
import { Player } from '../Player/Player'
import './team.css'


interface Props extends TeamPlayers {
    num: number
}

export const Team = ({ am, pro, num }: Props) => {
    return (
        <div className="team-wrapper">
            <h1>{num}</h1>
            <div className="team">
                <Player {...pro} />
                <Player {...am} />
            </div>
        </div>
    )
}
