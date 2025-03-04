import { NavLink } from 'react-router-dom'
import './Header.css'

export default function Header() {

    return (
        <div className='Header'>
            <div>
                Logo
            </div>
            <div>
                <nav>
                    <NavLink to="/furnitures/list">list</NavLink>
                    <NavLink to="/furnitures/add">add</NavLink>
                </nav>
            </div>
        </div>
    )
}