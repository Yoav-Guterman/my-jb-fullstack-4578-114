import { jwtDecode } from "jwt-decode"
import { useContext, useMemo } from "react"
import User from "../models/user/User"
import { AuthContext } from "../components/auth/auth/Auth"

export default function useUserId() {
    const { jwt } = useContext(AuthContext)!
    // const decoded = jwtDecode<User>(jwt)

    const userId = useMemo(() => {
        const { id } = jwtDecode<User>(jwt)
        return id
    }, [jwt])

    return userId
}