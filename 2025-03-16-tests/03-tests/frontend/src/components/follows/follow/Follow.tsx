import './Follow.css'
import User from '../../../models/user/User'
import profilePicSource from '../../../assets/images/profilePic.jpg'
import { useState } from 'react'
import LoadingButton from '../../common/loadingButton/LoadingButton'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { unfollow as unfollowAction, follow as followAction } from '../../../redux/followingSlice'
import FollowingService from '../../../services/auth-aware/Following'
import useService from '../../../hooks/useService'
import { setNewContent } from '../../../redux/feedSlice'

interface FollowProps {
    user: User
}

export default function Follow(props: FollowProps): JSX.Element {
    const { user: { id, name } } = props
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const dispatch = useAppDispatch()

    const isFollowing = useAppSelector(state => state.following.following.findIndex(f => f.id === id) > -1)

    const followingService = useService(FollowingService)

    async function unfollow() {
        if (confirm(`are you sure you want to unfollow ${name}`))
            try {
                setIsLoading(true)
                await followingService.unfollow(id)
                dispatch(unfollowAction({ userId: id }))
                dispatch(setNewContent(true))
            } catch (e) {
                console.log(e)
            } finally {
                setIsLoading(false)
            }
    }

    async function follow() {
        try {
            setIsLoading(true)
            await followingService.follow(id)
            dispatch(followAction(props.user))
            dispatch(setNewContent(true))
        } catch (e) {
            console.log(e)
        } finally {
            setIsLoading(false)
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
                {isFollowing && isLoading &&
                    <LoadingButton message={'unfollowing'} />}

                {isFollowing && !isLoading && <button type="button" className="btn btn-outline-success btn-sm" onClick={unfollow}>unfollow</button>}


                {!isFollowing && isLoading &&
                    <LoadingButton message={'follow'} />}

                {!isFollowing && !isLoading &&
                    <button type="button" className="btn btn-outline-success btn-sm" onClick={follow}>follow</button>}
            </div>
        </div>
    )
}