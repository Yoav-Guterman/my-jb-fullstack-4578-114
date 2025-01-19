import './Follow.css'
import followingService from '../../../services/following'
import User from '../../../models/user/User'
import profilePicSource from '../../../assets/images/profilePic.jpg'
import { useState } from 'react'
import LoadingButton from '../../common/loadingButton/LoadingButton'

interface FollowProps {
    user: User
    removeFromFollowingList(userId: string): void
}

export default function Follow(props: FollowProps): JSX.Element {
    const { user: { id, name }, removeFromFollowingList } = props
    const [isLoading, setIsLoading] = useState<boolean>(false)


    async function unfollow() {
        if (confirm(`are you sure you want to unfollow ${name}`))
            try {
                setIsLoading(true)
                await followingService.unfollow(id)
                removeFromFollowingList(id)
                setIsLoading(false)
            } catch (e) {
                console.log(e)
            }
    }

    return (
        <div className='Follow'>
            <div>
                <img src={profilePicSource} />
            </div>
            <div className='name'>
                {name}
            </div>
            <div>
                {isLoading ? <LoadingButton message={'unfollowing'} /> :
                    <button type="button" className="btn btn-outline-success btn-sm" onClick={unfollow}>unfollow</button>
                }
            </div>
        </div>
    )
}