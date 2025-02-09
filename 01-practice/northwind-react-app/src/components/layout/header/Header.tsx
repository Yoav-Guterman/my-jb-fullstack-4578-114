import { JSX } from "react";
import './Header.css'
import { NavLink } from "react-router-dom";

export default function Header(): JSX.Element {
    return (
        <div className="Header">
            <div className="logo">
                logo
            </div>
            <div>
                <nav>
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/products">Products</NavLink>
                    <NavLink to="/employees">Employee</NavLink>
                </nav>
            </div>
        </div>
    )
}