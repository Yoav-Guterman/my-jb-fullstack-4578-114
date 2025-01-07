import Eden from '../cats/eden/Eden'
import Ginger from '../cats/gongo/ginger'
import './Cat-list.css'

export default function CatList(): JSX.Element {
    return (
        <div className='CatList'>
            <Eden />
            <Ginger />
        </div>
    )
}