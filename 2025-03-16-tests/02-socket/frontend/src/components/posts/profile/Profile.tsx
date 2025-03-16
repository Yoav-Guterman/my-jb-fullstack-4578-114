// Profile.tsx
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
import ProfileService from '../../../services/auth-aware/Profile'

export default function Profile() {
    useTitle('SN- Profile')

    // Get both posts and initialization status from Redux
    const { posts, isLoading } = useAppSelector(state => state.profile)
    const profileService = useService(ProfileService)
    const dispatch = useAppDispatch()

    useEffect(() => {
        (async () => {
            if (isLoading) {
                try {
                    const postsFromServer = await profileService.getProfile()
                    dispatch(init(postsFromServer))
                } catch (e) {
                    console.error('Error fetching posts:', e)
                }
            }
        })()
    }, [])

    return (
        <div className='Profile'>

            {isLoading && <Loading size={LoadingSize.LARGE} />}

            {!isLoading && posts.length === 0 &&
                <> <NewPost />
                    <p>you don't have Posts yet!</p>
                </>}

            {!isLoading && posts.length > 0 &&
                <>
                    <NewPost />
                    {posts.map(p => (
                        <Post
                            key={p.id}
                            post={p}
                            isAllowActions={true}
                        />
                    ))}
                </>
            }

        </div>
    )
}