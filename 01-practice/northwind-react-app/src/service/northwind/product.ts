import axios from "axios";
import Product from "../../models/product/product";

class ProductService {
    // Method to get all products
    public async getAllProducts(): Promise<Product[]> {
        const response = await axios.get((`${import.meta.env.VITE_API_BASE_URL}/products/`));
        console.log('API Response:', response.data);  // Add this line
        return response.data;
    }
}


// singleton 
const productService = new ProductService();
export default productService
