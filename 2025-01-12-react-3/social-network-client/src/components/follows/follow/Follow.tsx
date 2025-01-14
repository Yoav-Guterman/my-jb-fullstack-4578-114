import './Follow.css'
import following from '../../../services/following'
import User from '../../../models/user/User'
import profilePic from '../../../assets/images/profilePic.jpg'
import { useEffect, useState } from 'react'

interface FollowProps {
    user: User
}

export default function Follow(props: FollowProps): JSX.Element {
    const [isFollowing, setIsFollowing] = useState<boolean>(false)

    useEffect(() => {
        following.getUsers()
            .then(users => {
                const isUserFollowed = users.some(u => u.id === props.user.id)
                setIsFollowing(isUserFollowed)
            })
            .catch(alert)

    }, [props.user.id])

    async function handleUnFollowClick() {
        try {
            if (isFollowing) {
                await following.unFollow(props.user.id)
                setIsFollowing(!isFollowing)
            }
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div className='Follow'>
            <div>
                <img src={profilePic} />
            </div>
            <div className='name'>
                {props.user.name}
            </div>
            <div>
                <button
                    onClick={handleUnFollowClick}
                >
                    {isFollowing ? 'unfollow' : 'follow'}
                </button>
            </div>
        </div>
    )
}