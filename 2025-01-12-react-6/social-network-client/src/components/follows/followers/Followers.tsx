import { useEffect } from 'react'
import './Followers.css'
import Follow from '../follow/Follow'
import Loading from '../../common/loading/Loading'
import { LoadingSize } from '../../../models/loading/loadingSize'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { init } from '../../../redux/followersSlice'
import useService from '../../../hooks/useService'
import FollowersService from '../../../services/auth-aware/Followers'

export default function Followers() {

    const followers = useAppSelector(state => state.followers.followers)
    const dispatch = useAppDispatch()

    const followersService = useService(FollowersService)

    useEffect(() => {
        (async () => {
            try {
                if (followers.length === 0) {
                    const followers = await followersService.getUsers()
                    dispatch(init(followers))
                }
            } catch (e) {
                console.log(e)
            }
        })()
    }, [])

    return (
        <div className='Followers'>
            <div className='followers-title'>
                my followers
            </div>
            <div className='my-followers'>

                {followers.length === 0 && <Loading size={LoadingSize.MEDIUM} />}


                {followers.length > 0 && <>
                    {followers.map(follow => <Follow
                        key={follow.username}
                        user={follow}
                    ></Follow>)}
                </>}
            </div>
        </div>
    )
}