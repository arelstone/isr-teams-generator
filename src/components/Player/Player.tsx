import { Driver } from '../../types'
import { Category } from '../Category/Category'
import './player.css'



interface Props extends Driver { }

export const Player = ({ category, name, total, times }: Props) => {
    return (
        <div className={`player ${category}`}>
            <Category category={category} />
            <div className="player-wrapper">
                <div className="player-name-wrapper">
                    <span className="player-name">{name}</span>
                    <div className="player-lap-wrapper">
                        {times.map((t, index) => (<span key={index} className="player-lap-time">{t}</span>))}
                    </div>
                </div>
                <div>
                    <div className="player-total-time">{total}</div>

                </div>
            </div>
        </div>
    )
}
