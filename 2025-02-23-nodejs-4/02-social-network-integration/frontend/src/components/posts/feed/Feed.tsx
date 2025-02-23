import { useEffect } from 'react'
import './Feed.css'
import Post from '../post/Post'
import useTitle from '../../../hooks/useTitle'
import Loading from '../../common/loading/Loading'
import { LoadingSize } from '../../../models/loading/loadingSize'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { init, setNewContent } from '../../../redux/feedSlice'
import FeedService from '../../../services/auth-aware/Feed'
import useService from '../../../hooks/useService'

export default function Feed() {

    const { posts, isNewContent, isLoading } = useAppSelector(state => state.feed)
    const dispatch = useAppDispatch()
    const feedService = useService(FeedService)

    useTitle('SN- Feed')

    useEffect(() => {
        (async () => {
            if (isLoading) {
                try {
                    const postsFromServer = await feedService.getFeed()
                    dispatch(init(postsFromServer))
                } catch (e) {
                    console.error('Error fetching posts:', e)
                }
            }
        })()
    }, [])

    // fix the DRY
    async function reload() {
        try {
            const postsFromServer = await feedService.getFeed()
            dispatch(init(postsFromServer))
        } catch (e) {
            alert(e)
        }
    }

    async function dismiss() {
        dispatch(setNewContent(false))
    }

    return (
        <div className='Feed'>

            {isLoading && <Loading size={LoadingSize.LARGE} />}

            {!isLoading && posts.length === 0 &&
                <div className='EmptyPosts'>
                    you have no posts in your feed. <br />
                    follow people so you can see their posts
                </div>}

            {!isLoading && posts.length > 0 && <>

                {isNewContent &&
                    <><div className='info'>you have new content, do you want to refresh?
                        <button onClick={reload}>yes</button>
                        <button onClick={dismiss}>no</button>
                    </div></>
                }

                {posts.map(p => <Post
                    key={p.id}
                    post={p}
                ></Post>
                )}
            </>
            }
        </div>

    )
}