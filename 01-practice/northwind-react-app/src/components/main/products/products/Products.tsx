import { JSX, useEffect, useState } from "react";
import './Products.css'
import Categories from "../categories/Categories";
import productService from "../../../../service/northwind/product";
import ProductModel from "../../../../models/product/product";
import Product from "../product/product";

export default function Products(): JSX.Element {

    const [products, setProducts] = useState<ProductModel[]>([])

    useEffect(() => {
        (async () => {
            try {
                const products = await productService.getAllProducts()
                setProducts(products)
            } catch (e) {
                alert(e)
            }
        })()
    }, [])

    return (
        <div className="Products">
            <div className="CategoryContainer">
                <Categories />
            </div>
            <div>
                <div className="topControls">
                    <input type="search" className="searchBar" placeholder="Search products..." />
                    <button className="addButton">Add Product</button>
                </div>
                <div className="productContainer">
                    {products.map(p => <Product key={p.id} ProductModel={p} />)}
                </div>
            </div>
        </div>
    )
}