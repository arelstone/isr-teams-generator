import { DriverCategory } from '../../types'
import { Category } from '../Category/Category'
import './player.css'

export type Driver = {
    category: DriverCategory
    name: string
    time: string
}

interface Props extends Driver { }

export const Player = ({ category, name, time }: Props) => {
    return (
        <div className={`player ${category}`}>
            <Category category={category} />
            <div className="player-wrapper">
                <div className="player-name-wrapper">
                    <span className="player-name">{name}</span>
                </div>
                <span className="player-time">{time}</span>
            </div>
        </div>
    )
}
