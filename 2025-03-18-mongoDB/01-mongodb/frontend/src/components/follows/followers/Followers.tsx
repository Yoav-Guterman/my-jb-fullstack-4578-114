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

    const { followers, isLoading } = useAppSelector(state => state.followers)
    const dispatch = useAppDispatch()

    const followersService = useService(FollowersService)

    useEffect(() => {
        (async () => {
            try {
                if (isLoading) {
                    const followersFromServer = await followersService.getUsers()
                    dispatch(init(followersFromServer))
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

                {isLoading && <Loading size={LoadingSize.MEDIUM} />}

                {!isLoading && followers.length === 0 &&
                    <div className='noFollowers'>
                        your have no followers!
                    </div>
                }


                {!isLoading && followers.length > 0 && <>
                    {followers.map(follow => <Follow
                        key={follow.username}
                        user={follow}
                    ></Follow>)}
                </>}
            </div>
        </div>
    )
}