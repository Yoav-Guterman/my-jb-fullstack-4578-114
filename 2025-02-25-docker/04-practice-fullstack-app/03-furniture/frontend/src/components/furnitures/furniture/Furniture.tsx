import FurnitureModel from '../../../models/furniture/FurnitureModel'
import './Furniture.css'

interface FurnitureProps {
    furniture: FurnitureModel,
}

export default function Furniture(props: FurnitureProps) {
    const { color, size, price, types } = props.furniture

    return (
        <div className='Furniture'>
            <div className='type-name'>{types.name}</div>
            <h4>
                Dimensions: {size}<br />
                Color: {color}
            </h4>
            <div className='price'>${price}</div>
        </div>
    )
}