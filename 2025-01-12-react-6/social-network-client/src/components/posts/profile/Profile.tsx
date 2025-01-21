import { useEffect } from 'react'
import './Profile.css'
import Post from '../post/Post'
import NewPost from '../new/NewPost'
import Loading from '../../common/loading/Loading'
import useTitle from '../../../hooks/useTitle'
import { LoadingSize } from '../../../models/loading/loadingSize'
import { init } from '../../../redux/profileSlice'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import useService from '../../../hooks/useService'
import ProfileService from '../../../services/auth-aware/profile'

export default function Profile() {


    useTitle('SN- Profile')

    const posts = useAppSelector(state => state.profile.posts)

    const profileService = useService(ProfileService)

    const dispatch = useAppDispatch()

    useEffect(() => {
        (async () => {
            try {
                if (posts.length === 0) {
                    const postsFromServer = await profile.getProfile()
                    dispatch(init(postsFromServer))
                }
            } catch (e) {
                console.log(e)
            }
        })()
    }, [])


    return (
        <div className='Profile'>

            {posts.length === 0 && (
                <div className='Profile-loading'>
                    <Loading size={LoadingSize.LARGE} />
                </div>
            )}

            {posts.length > 0 && <>
                <NewPost />
                {posts.map(p => <Post
                    key={p.id}
                    post={p}
                    isAllowActions={true}
                >
                </Post>)}

            </>
            }

        </div>
    )
}