import { JSX } from 'react';
import './product.css'
import ProductModel from '../../../../models/product/product';

interface ProductProps {
    ProductModel: ProductModel
}

export default function Product(props: ProductProps): JSX.Element {

    const { name, price, imageUrl } = props.ProductModel

    // add later the function: viewDetails for each product

    return (
        <div className='Product'>
            <div className='productPicture'>
                <img src={imageUrl} />
            </div>
            <div className='productName'>
                {name}
            </div>
            <div className='price'>
                ${price}
            </div>
        </div>
    )
}