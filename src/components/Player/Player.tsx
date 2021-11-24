import { Driver } from '../../types'
import { Category } from '../Category/Category'
import './player.css'



interface Props extends Driver {
    withDifference?: boolean
}

export const Player = ({ category, name, total, times, difference, withDifference = false }: Props) => {
    if (!total) return null
    const [zandvoort, spa] = times

    const isFastest = (t: string) => t.startsWith('__') && t.endsWith('__') && 'fastest'
    const cleanTime = (t: string) => t.replace(/__/g, '')
    return (
        <div className={`player ${category}`}>
            <Category category={category} />
            <div className="player-wrapper">
                <div className="player-name-wrapper">
                    <span className="player-name">{name}</span>
                    <div className="player-lap-wrapper">
                        <span className={`player-lap-time ${isFastest(zandvoort)}`}>Zan: {cleanTime(zandvoort)}</span>
                        <span className='player-lap-time '>|</span>
                        <span className={`player-lap-time ${isFastest(spa)}`}>Spa: {cleanTime(spa)}</span>
                    </div>
                </div>
                <div>
                    <div className={`player-total-time ${isFastest(total)}`}>{cleanTime(total)}</div>
                    {withDifference && <div className='player-lap-time difference'>{Number(difference?.replace(/:/g, '')) !== 0 ? `+${difference}` : ''}</div>}
                </div>
            </div>

        </div>
    )
}
