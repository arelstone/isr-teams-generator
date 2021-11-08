import { Driver, Player } from '../Player/Player'
import './team.css'


interface Props {
    pro: Driver
    am: Driver
}

export const Team = ({ am, pro }: Props) => {
    return (
        <div className="team">
            <Player {...pro} />
            <Player {...am} />
        </div>
    )
}
