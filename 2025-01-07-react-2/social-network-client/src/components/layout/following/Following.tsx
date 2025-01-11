import { useEffect, useState } from 'react'
import './Following.css'
import User from '../../../models/user/User'
import following from '../../../services/following'

export default function Following() {

    const [users, setUsers] = useState<User[]>([])

    useEffect(() => {
        following.getUsers()
            .then(setUsers)
            .catch(alert)
    }, [])

    return (
        <div className='Following'>
            <p>Following:</p>
            <ul>
                {users.map(({ id, username }) => <li key={id} >{username}</li>)}
            </ul>
            <h4>you have {users.length} following</h4>
        </div>
    )
}