import { useEffect, useState } from 'react'
import './Followers.css'
import User from '../../../models/user/User'
import followers from '../../../services/followers'
import Follow from '../follow/Follow'

export default function Followers() {

    const [users, setUsers] = useState<User[]>([])

    useEffect(() => {
        followers.getUsers()
            .then(setUsers)
            .catch(alert)
    }, [])

    return (
        <div className='Followers'>
            <div className='followers-title'>
                my followers
            </div>
            <div className='my-followers'>
                {users.map(follow => <Follow key={follow.username} user={follow}></Follow>)}
            </div>
        </div>
    )
}