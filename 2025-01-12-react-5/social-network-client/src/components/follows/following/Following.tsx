import { useEffect, useState } from 'react'
import './Following.css'
import User from '../../../models/user/User'
import following from '../../../services/following'
import Follow from '../follow/Follow'
import Loading from '../../common/loading/Loading'
import { LoadingSize } from '../../../models/loading/loadingSize'

export default function Following() {

    const [users, setUsers] = useState<User[]>([])

    useEffect(() => {
        following.getUsers()
            .then(setUsers)
            .catch(alert)
    }, [])

    function removeFromFollowingList(userId: string): void {
        const newFollowing = users.filter(f => f.id !== userId)
        setUsers(newFollowing)
    }

    return (
        <div className='Following'>
            <div className='following-title'>
                i'm following
            </div>
            <div className='im-following'>

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