import { useEffect, useState } from 'react'
import './Following.css'
import User from '../../../models/user/User'
import following from '../../../services/following'
import Follow from '../follow/Follow'

export default function Following() {

    const [users, setUsers] = useState<User[]>([])

    useEffect(() => {
        following.getUsers()
            .then(setUsers)
            .catch(alert)
    }, [])

    return (
        <div className='Following'>
            <div className='following-title'>
                i'm following
            </div>
            <div className='im-following'>
                {users.map(follow => <Follow key={follow.username} user={follow}></Follow>)}

            </div>
        </div>
    )
}