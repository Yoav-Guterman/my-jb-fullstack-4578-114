import { useEffect, useState } from 'react'
import './Followers.css'
import User from '../../../models/user/User'
import followers from '../../../services/followers'
import Follow from '../follow/Follow'
import Loading from '../../common/loading/Loading'
import { LoadingSize } from '../../../models/loading/loadingSize'

export default function Followers() {

    const [users, setUsers] = useState<User[]>([])

    useEffect(() => {
        followers.getUsers()
            .then(setUsers)
            .catch(alert)
    }, [])

    function removeFromFollowingList(userId: string): void {
        console.log(`need to fix that ${userId}`)
    }

    return (
        <div className='Followers'>
            <div className='followers-title'>
                my followers
            </div>
            <div className='my-followers'>

                {users.length === 0 && <Loading size={LoadingSize.MEDIUM} />}


                {users.length > 0 && <>
                    {users.map(follow => <Follow
                        key={follow.username}
                        user={follow}
                        removeFromFollowingList={removeFromFollowingList}
                    ></Follow>)}
                </>}
            </div>
        </div>
    )
}