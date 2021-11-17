import { Driver } from '../../types'
import { Category } from '../Category/Category'
import './player.css'



interface Props extends Driver { }

export const Player = ({ category, name, total }: Props) => {
    return (
        <div className={`player ${category}`}>
            <Category category={category} />
            <div className="player-wrapper">
                <div className="player-name-wrapper">
                    <span className="player-name">{name}</span>
                </div>
                <span className="player-time">{total}</span>
            </div>
        </div>
    )
}
