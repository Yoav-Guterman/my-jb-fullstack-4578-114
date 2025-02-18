import { JSX } from "react";
import './Footer.css'

export default function Footer(): JSX.Element {
    return (
        <div className="Footer">
            <p>server is: {import.meta.env.VITE_API_BASE_URL}</p>
        </div>
    )
}