// Profile.tsx
import { useEffect, useState } from 'react'
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
    const { posts, isInitialized } = useAppSelector(state => state.profile)
    const [isLoading, setIsLoading] = useState(true)

    const profileService = useService(ProfileService)
    const dispatch = useAppDispatch()

    useEffect(() => {
        const fetchPosts = async () => {
            // Only fetch if we haven't initialized the data yet
            if (isInitialized === false) {
                try {
                    const postsFromServer = await profileService.getProfile()
                    dispatch(init(postsFromServer))
                } catch (e) {
                    console.error('Error fetching posts:', e)
                }
            }
            setIsLoading(false)
        }

        fetchPosts()
    }, [isInitialized, dispatch, profileService])

    // Early return for loading state
    if (isLoading) {
        return (
            <div className='Profile-loading'>
                <Loading size={LoadingSize.LARGE} />
            </div>
        )
    }

    return (
        <div className='Profile'>
            <NewPost />
            {posts.length === 0 ? (
                <div className='postsEmpty'>
                    you have no posts uploaded yet. <br />
                    press Add Post to create your first post
                </div>
            ) : (
                posts.map(p => (
                    <Post
                        key={p.id}
                        post={p}
                        isAllowActions={true}
                    />
                ))
            )}
        </div>
    )
}