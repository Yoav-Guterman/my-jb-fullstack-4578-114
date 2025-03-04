import { useForm } from 'react-hook-form'
import './Login.css'
import LoginModel from '../../../models/user/Login'
import auth from '../../../services/auth'
import { useContext, useState } from 'react'
import { AuthContext } from '../auth/Auth'
import { useNavigate } from 'react-router-dom'
import LoadingButton from '../../common/loadingButton/LoadingButton'
import { AxiosError } from 'axios'


export default function Login(): JSX.Element {

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { register, handleSubmit } = useForm<LoginModel>()

    const navigate = useNavigate()
    const { newLogin } = useContext(AuthContext)!

    async function submit(login: LoginModel) {
        try {
            setIsLoading(true)
            const jwt = await auth.login(login)
            newLogin(jwt)
        } catch (e) {
            if (e instanceof AxiosError) {
                console.log('error:', e.response?.data)
            }
            console.log(e)
        } finally {
            setIsLoading(false)
        }

    }
    function goToSignUp() {
        navigate('/signUp')
    }

    return (
        <div className='Login'>
            <div className='header'>
                <h1>Welcome to Socialify</h1>
            </div>
            <div className="container">
                <p>Socialify allows users to share short, impactful updates, fostering quick conversations and real-time interactions.</p>
                <p>With Socialify, you can follow your favorite personalities, join trending discussions, and stay informed about the latest news.</p>
            </div>
            <div className='form-container' >
                <h3 className='form-title'>login to your account</h3>
                <form onSubmit={handleSubmit(submit)}>
                    <div className="mb-3">
                        <input className="form-control" placeholder='username' {...register('username')} />
                    </div>
                    <div className="mb-3">
                        <input className="form-control" placeholder='password' type='password' {...register('password')} />
                    </div>
                    {isLoading ? <LoadingButton message={'Logging in'} /> :
                        <button type="submit" className="btn btn-primary">Login</button>
                    }
                </form>
                <h6>don't have an account? sign in here</h6>
                <button
                    onClick={goToSignUp}
                    className="btn btn-link"
                >
                    sign up
                </button>
            </div>
            <div className='footer'>
                <p>© 2025 Socialify. All rights reserved. <a href="">Privacy Policy</a></p>
            </div>
        </div>
    )
}