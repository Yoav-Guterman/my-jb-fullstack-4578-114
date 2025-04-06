import { Navigate, Route, Routes } from "react-router-dom";
import Profile from "../../posts/profile/Profile";
import Feed from "../../posts/feed/Feed";
import NotFound from "../not-found/NotFound";
import EditPost from "../../posts/edit/EditPosts";
import SignUp from "../../auth/sign-up/SignUp";
import { useContext } from "react";
import { AuthContext } from "../../auth/auth/Auth";
import Login from "../../auth/login/Login";



export default function Routing(): JSX.Element {

    const { jwt } = useContext(AuthContext)!
    const isLoggedIn = !!jwt

    return (
        <Routes>
            {/* Public routes - always accessible */}
            <Route path="/login" element={
                // If already logged in, redirect to profile
                isLoggedIn ? <Navigate to="/profile" /> : <Login />
            } />
            <Route path="/signUp" element={
                isLoggedIn ? <Navigate to="/profile" /> : <SignUp />
            } />

            {/* Protected routes - only accessible when logged in */}
            <Route path="/" element={
                isLoggedIn ? <Navigate to="/profile" /> : <Navigate to="/login" />
            } />
            <Route path="/profile" element={
                isLoggedIn ? <Profile /> : <Navigate to="/login" />
            } />
            <Route path="/feed" element={
                isLoggedIn ? <Feed /> : <Navigate to="/login" />
            } />
            <Route path="/edit/:id" element={
                isLoggedIn ? <EditPost /> : <Navigate to="/login" />
            } />

            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}