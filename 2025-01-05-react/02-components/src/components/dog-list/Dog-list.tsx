import Chief from '../dogs/chief/chief'
import Noop from '../dogs/noop/noop'
import './Dog-list.css'

export default function DogList(): JSX.Element {
    return (
        <div className='CatList'>
            <Chief />
            <Noop />
        </div>
    )
}