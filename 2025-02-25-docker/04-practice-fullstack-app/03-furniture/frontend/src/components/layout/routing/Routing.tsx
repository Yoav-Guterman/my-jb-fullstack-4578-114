import { Navigate, Route, Routes } from "react-router-dom";
import NotFound from "../not-found/NotFound";
import List from "../../furnitures/list/List";
import Add from "../../furnitures/add/Add";


export default function Routing(): JSX.Element {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/furnitures/list" />} />
            <Route path="/furnitures/list" element={<List />} />
            <Route path="/furnitures/add" element={<Add />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}
