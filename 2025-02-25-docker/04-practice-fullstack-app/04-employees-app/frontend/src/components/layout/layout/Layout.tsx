import Header from '../header/Header'
import Routing from '../routing/Routing'
import './Layout.css'

export default function Layout() {

    return (
        <div className='Layout'>
            <header>
                <Header />
            </header>
            <main>
                <Routing />
            </main>
        </div>
    )
}