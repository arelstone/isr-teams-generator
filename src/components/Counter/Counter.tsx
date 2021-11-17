import './counter.css'


interface Props {
    count: number
}

export const Counter = ({ count }: Props) => {
    return (
        <div className="counter-wrapper">
            <h1>Teams left: {count}</h1>
        </div>
    )
}
