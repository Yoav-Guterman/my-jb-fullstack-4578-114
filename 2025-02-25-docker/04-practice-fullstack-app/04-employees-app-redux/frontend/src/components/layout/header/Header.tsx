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
                    <NavLink to="/list">employees</NavLink>
                    <NavLink to="/add">add employee</NavLink>
                    {/* <NavLink to="/search">search</NavLink> */}
                </nav>
            </div>

        </div>
    )
}