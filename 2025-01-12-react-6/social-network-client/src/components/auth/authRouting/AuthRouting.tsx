import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../login/Login";
import SignUp from "../sign-up/SignUp";

export default function AuthRouting(): JSX.Element {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
    )
}