import Followers from '../../follows/followers/Followers'
import Following from '../../follows/following/Following'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import Routing from '../routing/Routing'
import './Layout.css'

export default function Layout() {
    return (
        <div className='Layout'>
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
        </div>
    )
}