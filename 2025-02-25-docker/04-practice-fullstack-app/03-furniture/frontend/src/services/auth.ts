import axios from "axios"

class Auth {
    async add(draft: Draft): Promise<Product> {
        const response = await axios.post<Product>(`${import.meta.env.VITE_REST_SERVER_URL}/products`, draft)
        const newProduct = response.data
        return newProduct
    }
}

const auth = new Auth()
export default auth

