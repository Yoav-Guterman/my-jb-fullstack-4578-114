import { useEffect, } from 'react'
import './Following.css'
import followingService from '../../../services/following'
import Follow from '../follow/Follow'
import Loading from '../../common/loading/Loading'
import { LoadingSize } from '../../../models/loading/loadingSize'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { init } from '../../../redux/followingSlice'

export default function Following() {

    const following = useAppSelector(state => state.following.following)

    const dispatch = useAppDispatch()

    useEffect(() => {
        (async () => {
            try {
                const following = await followingService.getUsers()
                dispatch(init(following))
            } catch (e) {
                console.log(e)
            }
        })()
    }, [])

    return (
        <div className='Following'>
            <div className='following-title'>
                i'm following
            </div>
            <div className='im-following'>

                {following.length === 0 && <Loading size={LoadingSize.MEDIUM} />}

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