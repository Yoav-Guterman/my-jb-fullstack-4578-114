import { createContext, PropsWithChildren, useState } from 'react'
import './Auth.css'
import { useAppDispatch } from '../../../redux/hooks'
import { clearProfileInitialized } from '../../../redux/profileSlice'
import { clearFeedInitialized } from '../../../redux/feedSlice'
interface AuthContextInterface {
    jwt: string,
    newLogin(jwt: string): void
    logOut(): void
}

export const AuthContext = createContext<AuthContextInterface | null>(null)

export default function Auth(props: PropsWithChildren): JSX.Element {

    const dispatch = useAppDispatch()

    const JWT_KEY_NAME = 'jwt'

    const [jwt, setJwt] = useState<string>(localStorage.getItem(JWT_KEY_NAME) || '')

    const { children } = props

    function newLogin(jwt: string) {
        setJwt(jwt)
        localStorage.setItem(JWT_KEY_NAME, jwt)
        dispatch(clearProfileInitialized())
        dispatch(clearFeedInitialized())
    }

    function logOut() {
        localStorage.removeItem(JWT_KEY_NAME)
        setJwt('')
        dispatch(clearProfileInitialized())
        dispatch(clearFeedInitialized())

    }

    return (
        <AuthContext.Provider value={{ jwt, newLogin, logOut }}>
            {children}
        </AuthContext.Provider>
    )
}