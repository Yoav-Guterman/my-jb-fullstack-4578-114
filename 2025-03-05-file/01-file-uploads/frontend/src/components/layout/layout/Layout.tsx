import { useContext } from 'react'
import Followers from '../../follows/followers/Followers'
import Following from '../../follows/following/Following'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import Routing from '../routing/Routing'
import './Layout.css'
import { AuthContext } from '../../auth/auth/Auth'

export default function Layout() {
    const { jwt } = useContext(AuthContext)!
    const isLoggedIn = !!jwt

    return (
        <div className='Layout'>
            {isLoggedIn ? (
                <>
                    <header>
                        <Header />
                    </header>
                    <aside className='aside1'>
                        <Following />
                    </aside>
                    <aside className='aside2'>
                        <Followers />
                    </aside>
                    <main>
                        <Routing />
                    </main>
                    <footer>
                        <Footer />
                    </footer>
                </>
            ) : (
                <div className="auth-main">
                    <Routing />
                </div>
            )}
        </div>
    )
}