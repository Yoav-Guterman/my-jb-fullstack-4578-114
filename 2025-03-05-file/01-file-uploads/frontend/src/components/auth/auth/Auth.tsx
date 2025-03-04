import { createContext, PropsWithChildren, useState } from 'react'
import './Auth.css'
import { useAppDispatch } from '../../../redux/hooks'
import { resetFeedLoad } from '../../../redux/feedSlice'
import { resetProfileReload } from '../../../redux/profileSlice'
import { resetFollowingLoad } from '../../../redux/followingSlice'
import { resetFollowersLoad } from '../../../redux/followersSlice'
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

    function resetLoading() {
        dispatch(resetProfileReload())
        dispatch(resetFeedLoad())
        dispatch(resetFollowingLoad())
        dispatch(resetFollowersLoad())
    }

    function newLogin(jwt: string) {
        setJwt(jwt)
        localStorage.setItem(JWT_KEY_NAME, jwt)
        resetLoading()
    }

    // make it into one function to prevent DRY

    function logOut() {
        localStorage.removeItem(JWT_KEY_NAME)
        setJwt('')
        resetLoading()
    }

    return (
        <AuthContext.Provider value={{ jwt, newLogin, logOut }}>
            {children}
        </AuthContext.Provider>
    )
}