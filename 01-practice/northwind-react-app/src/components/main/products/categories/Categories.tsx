import { JSX } from "react";
import './Categories.css'
import { NavLink } from "react-router-dom";

export default function Categories(): JSX.Element {
    return (
        <div className="Categories">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/employees">Employee</NavLink>
        </div>
    )
}