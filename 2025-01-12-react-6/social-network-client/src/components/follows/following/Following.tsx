import { useEffect, useState, } from 'react'
import './Following.css'
import Follow from '../follow/Follow'
import Loading from '../../common/loading/Loading'
import { LoadingSize } from '../../../models/loading/loadingSize'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { init } from '../../../redux/followingSlice'
import useService from '../../../hooks/useService'
import FollowingService from '../../../services/auth-aware/following'

export default function Following() {

    const { following, isInitialized } = useAppSelector(state => state.following)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const dispatch = useAppDispatch()
    const followingService = useService(FollowingService)

    useEffect(() => {
        (async () => {
            if (isInitialized === false) {
                try {
                    const following = await followingService.getUsers()
                    dispatch(init(following))
                } catch (e) {
                    console.log(e)
                }
                setIsLoading(false)
            }
        })()
    }, [isInitialized, dispatch, followingService])

    if (isLoading) {
        return (
            <div className='following-loading'>
                {/* need to complete that */}
                <Loading size={LoadingSize.MEDIUM} />
            </div>
        )
    }

    return (
        <div className='Following'>
            <div className='following-title'>
                i'm following
            </div>
            <div className='im-following'>

                {following.length === 0 && <>
                    <div className='emptyFollowing'>
                        you have no following
                    </div>
                </>}

                {following.length > 0 && <>
                    {following.map(follow => <Follow
                        key={follow.username}
                        user={follow}
                    ></Follow>)}
                </>}
            </div>
        </div>
    )
}