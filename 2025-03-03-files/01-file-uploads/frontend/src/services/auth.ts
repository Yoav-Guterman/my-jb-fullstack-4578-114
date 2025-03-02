import axios from "axios"
import Login from "../models/user/Login"
import SignUp from "../models/user/signUp"

class Auth {
    async login(login: Login): Promise<string> {
        const response = await axios.post<{ jwt: string }>(`${import.meta.env.VITE_REST_SERVER_URL}/auth/login`, login)
        return response.data.jwt
    }

    async signUp(signUp: SignUp): Promise<string> {
        const response = await axios.post<{ jwt: string }>(`${import.meta.env.VITE_REST_SERVER_URL}/auth/signup`, signUp)
        return response.data.jwt
    }
}

const auth = new Auth()
export default auth

