import GiftModel from '../../../models/gift/GiftModel'
import './Gift.css'

interface GiftProps {
    gift: GiftModel
}

export default function Gift(gift: GiftProps): JSX.Element {
    const { name, description, price, discount } = gift.gift

    // Convert price and discount to numbers and provide defaults
    const numericPrice = typeof price === 'number' ? price : parseFloat(price) || 0
    const numericDiscount = typeof discount === 'number' ? discount : parseFloat(discount) || 0

    // Calculate the discounted price
    const discountedPrice = numericPrice - (numericPrice * (numericDiscount / 100))

    return (
        <div className='Gift'>
            <h3 className="gift-name">{name || 'Unnamed Gift'}</h3>
            <p className="gift-description">{description || 'No description available'}</p>
            <div className="gift-price-container">
                {numericDiscount > 0 ? (
                    <>
                        <span className="original-price">${numericPrice.toFixed(2)}</span>
                        <span className="discounted-price">${discountedPrice.toFixed(2)}</span>
                        <span className="discount-badge">-{numericDiscount}%</span>
                    </>
                ) : (
                    <span className="price">${numericPrice.toFixed(2)}</span>
                )}
            </div>
        </div>
    )
}