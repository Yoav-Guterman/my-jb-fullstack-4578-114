import CatList from '../cat-list/Cat.list'
import DogList from '../dog-list/Dog-list'
import './PetStore.css'

export default function PetStore() {
    return (
        <div className='petStore'>
            <CatList />
            <DogList />
        </div>
    )
}

