import { JSX } from "react";
import './Layout.css'
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Routing from "../routing/Routing";

export default function Layout(): JSX.Element {
    return (
        <div className="Layout">
            <header>
                <Header />
            </header>
            <main>
                <Routing />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}