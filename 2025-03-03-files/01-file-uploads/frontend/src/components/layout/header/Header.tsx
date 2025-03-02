import { NavLink } from 'react-router-dom'
import './Header.css'
import useUsername from '../../../hooks/useUsername'
import { useContext } from 'react'
import { AuthContext } from '../../auth/auth/Auth'

export default function Header() {

    const name = useUsername()

    const { logOut } = useContext(AuthContext)!

    function logMeOut() {
        logOut()
    }

    return (
        <div className='Header'>
            <div>
                Logo
            </div>

            <div>
                <nav>
                    <NavLink to="/profile">profile</NavLink>
                    <NavLink to="/feed">feed</NavLink>
                    {/* <NavLink to="/search">search</NavLink> */}
                </nav>
            </div>
            <div>
                Hello {name} | <button onClick={logMeOut}>logout</button>
            </div>
        </div>
    )
}