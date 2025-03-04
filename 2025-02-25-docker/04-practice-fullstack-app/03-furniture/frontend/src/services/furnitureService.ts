import axios from "axios"
import FurnitureModel from "../models/furniture/FurnitureModel"
import FurnitureModelDraft from "../models/furniture/FurnitureModelDraft"


class Furniture {
    async getAllFurnitures(): Promise<FurnitureModel[]> {
        const response = await axios.get<FurnitureModel[]>(`${import.meta.env.VITE_REST_SERVER_URL}/furnitures`)
        const allFurnitures = response.data
        return allFurnitures
    }

    async add(draft: FurnitureModelDraft): Promise<FurnitureModel> {
        const response = await axios.post<FurnitureModel>(`${import.meta.env.VITE_REST_SERVER_URL}/furnitures`, draft)
        const newFurniture = response.data
        return newFurniture
    }
}

const furnitureService = new Furniture()
export default furnitureService

