import { useEffect } from 'react'
import './Following.css'
import Follow from '../follow/Follow'
import Loading from '../../common/loading/Loading'
import { LoadingSize } from '../../../models/loading/loadingSize'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { init } from '../../../redux/followingSlice'
import useService from '../../../hooks/useService'
import FollowingService from '../../../services/auth-aware/Following'

export default function Following() {

    const { following, isLoading } = useAppSelector(state => state.following)
    const dispatch = useAppDispatch()
    const followingService = useService(FollowingService)

    useEffect(() => {
        (async () => {
            if (isLoading) {
                try {
                    const followingFromServer = await followingService.getUsers()
                    dispatch(init(followingFromServer))
                } catch (e) {
                    console.log(e)
                }
            }
        })()
    }, [])

    return (
        <div className='Following'>
            <div className='following-title'>
                i'm following
            </div>
            <div className='im-following'>

                {isLoading && <Loading size={LoadingSize.MEDIUM} />}


                {!isLoading && following.length === 0 && <>
                    <div className='emptyFollowing'>
                        you have no following
                    </div>
                </>}

                {!isLoading && following.length > 0 && <>
                    {following.map(follow => <Follow
                        key={follow.username}
                        user={follow}
                    ></Follow>)}
                </>}
            </div>
        </div>
    )
}