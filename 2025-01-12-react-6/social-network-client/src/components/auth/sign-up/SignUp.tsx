import './SignUp.css'
import signUpModel from '../../../models/user/signUp'
import { useForm } from 'react-hook-form'
import auth from '../../../services/auth'
import { useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { AuthContext } from '../auth/Auth'
import LoadingButton from '../../common/loadingButton/LoadingButton'

export default function SignUp(): JSX.Element {

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { register, handleSubmit } = useForm<signUpModel>()
    const navigate = useNavigate()
    const { newLogin } = useContext(AuthContext)!


    async function submit(signUp: signUpModel) {
        try {
            setIsLoading(true)
            const jwt = await auth.signUp(signUp)
            newLogin(jwt)
            navigate('/profile')
        } catch (e) {
            console.log(e)
        } finally {
            setIsLoading(false)
        }

    }

    function goToLogIn() {
        navigate('/login')
    }

    return (
        <div className='SignUp'>
            <div className='header'>
                <h1>Welcome to Socialify</h1>
            </div>
            <div className="container">
                <p>Socialify allows users to share short, impactful updates, fostering quick conversations and real-time interactions.</p>
                <p>With Socialify, you can follow your favorite personalities, join trending discussions, and stay informed about the latest news.</p>
            </div>
            <div className='form-container' >
                <h3 className='form-title'>create an account</h3>
                <form onSubmit={handleSubmit(submit)}>
                    <div className="mb-3">
                        <input className="form-control" placeholder='name' {...register('name')} />
                    </div>
                    <div className="mb-3">
                        <input className="form-control" placeholder='username' {...register('username')} />
                    </div>
                    <div className="mb-3">
                        <input className="form-control" placeholder='password' type='password' {...register('password')} />
                    </div>
                    {isLoading ? <LoadingButton message={'creating new account'} /> :
                        <button type="submit" className="btn btn-primary">sign up</button>
                    }
                </form>
                <h6>already have an account? Log in here</h6>

                <button
                    onClick={goToLogIn}
                    className="btn btn-link"
                >
                    login
                </button>
            </div>
            <div className='footer'>
                <p>© 2025 Socialify. All rights reserved. <a href="">Privacy Policy</a></p>
            </div>
        </div>
    )
}