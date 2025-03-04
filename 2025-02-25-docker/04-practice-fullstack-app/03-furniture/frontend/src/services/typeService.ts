import axios from "axios"
import TypeModel from "../models/type/TypeModel"

class Type {
    async getAllTypes(): Promise<TypeModel[]> {
        const response = await axios.get<TypeModel[]>(`${import.meta.env.VITE_REST_SERVER_URL}/types`)
        const allTypes = response.data
        return allTypes
    }
}

const typeService = new Type()
export default typeService

