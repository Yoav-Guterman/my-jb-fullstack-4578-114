import { JSX } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../../main/home/Home";
import Products from "../../main/products/products/Products";
import Employees from "../../main/employees/Employees";
import NotFound from "../not-found/NotFound";

export default function Routing(): JSX.Element {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}