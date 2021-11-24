import './qualification-times.css';
import { useState } from "react"
import { Link } from "react-router-dom"
import { Player } from "../../components/Player/Player"
import { times } from '../../times'
import { Driver } from "../../types"



export const QualficationTimes = () => {
    const [players] = useState<Driver[][]>([
        times.filter(d => d.category === 'PRO'),
        times.filter(d => d.category === 'AM'),
    ])
    return (
        <div>
            <Link to='draw'>Draw </Link>
            <h1>Qualification times</h1>
            <div style={{
                display: 'flex',
                flexDirection: 'row'
            }}>
                {players.map((category, index) => <div
                    key={`category__${index}`}
                >
                    <div>
                        {category.map(player => <Player
                            key={player.name}
                            {...player}
                            withDifference
                        />)}
                    </div>
                </div>)}
            </div>
        </div>
    )
}