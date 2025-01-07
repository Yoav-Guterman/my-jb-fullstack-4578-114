import './Details.css'
import dogPicture from '../../assets/images/dog.webp'

export default function Details(): JSX.Element {
    const words = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, animi!'
    return (
        <div className='details'>
            <p>{words}</p>
            <div className='dogPicture'>
                <img src={dogPicture} />
            </div>
        </div>
    )
}