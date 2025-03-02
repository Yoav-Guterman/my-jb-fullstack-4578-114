import { Navigate, Route, Routes } from "react-router-dom";
import Gifts from "../../main/gifts/Gifts";
import Home from "../../main/home/Home";
import NewGift from "../../main/newGift/NewGift";
import NotFound from "../not-found/NotFound";



export default function Routing(): JSX.Element {

    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home"/>} />
            {/* <Route path="/" element={<Profile />} /> */}
            <Route path="/home" element={<Home />} />
            <Route path="/gifts" element={<Gifts />} />
            <Route path="/newGift" element={<NewGift />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}