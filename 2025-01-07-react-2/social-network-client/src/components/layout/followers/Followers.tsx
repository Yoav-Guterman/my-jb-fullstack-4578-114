import { useEffect, useState } from 'react'
import './Followers.css'
import User from '../../../models/user/User'
import followers from '../../../services/followers'

export default function Followers() {

    const [users, setUsers] = useState<User[]>([])

    useEffect(() => {
        followers.getUsers()
            .then(setUsers)
            .catch(alert)
    }, [])

    return (
        <div className='Followers'>
            <p>Followers:</p>
            <ul>
                {users.map(({ id, username }) => <li key={id} >{username}</li>)}
            </ul>
            <h4>you have {users.length} followers</h4>
            <p>Following:</p>
            <p>Following:</p>
            <p>Following:</p>
            <p>Following:</p>
        </div>
    )
}