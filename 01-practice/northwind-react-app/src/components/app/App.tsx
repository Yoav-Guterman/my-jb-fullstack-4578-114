import { JSX } from "react";
import './App.css'
import Layout from "../layout/layout/Layout";
import { BrowserRouter } from "react-router-dom";

export default function App(): JSX.Element {
    return (
        <div className="App">
            <BrowserRouter>
                <Layout />
            </BrowserRouter>
        </div>
    )
}