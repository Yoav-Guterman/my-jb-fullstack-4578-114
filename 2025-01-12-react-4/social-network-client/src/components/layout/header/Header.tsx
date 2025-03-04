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
                    {/* we dont want to use a tags for inner 
                    app navigation as it breaks SPA!!! */}
                    {/* <a href="/profile">profile</a>
                    <a href="/feed">feed</a> */}

                    {/* we can use <link> instead */}
                    {/* <Link to="/profile">profile</Link>
                    <Link to="/feed">feed</Link> */}

                    {/* but the best option is <NavLink> */}
                    <NavLink to="/profile">profile</NavLink>
                    <NavLink to="/feed">feed</NavLink>
                </nav>
            </div>
        </div>
    )
}