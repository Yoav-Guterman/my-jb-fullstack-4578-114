import { JSX } from "react";
import './Products.css'
import Categories from "../categories/Categories";

export default function Products(): JSX.Element {
    return (
        <div className="Products">
            <div className="CategoryContainer">
                <Categories />
            </div>
            <div className="productContainer">
                productContainer
            </div>
        </div>
    )
}