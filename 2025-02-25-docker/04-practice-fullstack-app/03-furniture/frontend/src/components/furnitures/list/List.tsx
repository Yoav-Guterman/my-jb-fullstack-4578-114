import { useEffect, useState } from 'react'
import './List.css'
import FurnitureModel from '../../../models/furniture/FurnitureModel'
import Furniture from '../furniture/Furniture'
import furnitureService from '../../../services/furnitureService'

export default function List() {

    const [furnitures, setFurnitures] = useState<FurnitureModel[]>([])

    useEffect(() => {
        (async () => {
            try {
                const allFurnitures = await furnitureService.getAllFurnitures()
                setFurnitures(allFurnitures)
            } catch (e) {
                alert(e)
            }
        })()
    }, [])

    return (
        <div className='List'>
            {furnitures.map(f => <Furniture furniture={f} key={f.id} />)}
        </div>
    )
}