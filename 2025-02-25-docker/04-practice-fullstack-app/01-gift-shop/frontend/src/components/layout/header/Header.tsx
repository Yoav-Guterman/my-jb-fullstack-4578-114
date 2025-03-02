import { NavLink } from 'react-router-dom'
import './Header.css'

export default function Header() {


    return (
        <div className='Header'>
            

            <div className='headerNav'>
                <nav>
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/gifts">gifts</NavLink>
                    <NavLink to="/New">New</NavLink>
                </nav>
            </div>

            <div className='headerTitle'>
                Gift shop
            </div>
        </div>
    )
}