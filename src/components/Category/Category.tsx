import { DriverCategory } from '../../types'
import '../../styles/fonts.css'
import './category.css'


interface Props {
    category: DriverCategory
}

export const Category = ({ category }: Props) => {
    return (
        <div className={`category ${category}`}>
            <p>{category}</p>
        </div>
    )
}
