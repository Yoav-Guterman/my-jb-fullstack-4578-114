import { useEffect } from 'react'
import './Feed.css'
import Post from '../post/Post'
import useTitle from '../../../hooks/useTitle'
import Loading from '../../common/loading/Loading'
import { LoadingSize } from '../../../models/loading/loadingSize'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { init, setNewContent } from '../../../redux/feedSlice'
import FeedService from '../../../services/auth-aware/feed'
import useService from '../../../hooks/useService'

export default function Feed() {

    const posts = useAppSelector(state => state.feed.posts)
    const dispatch = useAppDispatch()

    const feedService = useService(FeedService)


    useTitle('SN- Feed')

    useEffect(() => {
        (async () => {
            try {
                if (posts.length === 0) {
                    const postsFromServer = await feedService.getFeed()
                    dispatch(init(postsFromServer))
                }
            } catch (e) {
                alert(e)
            }
        })()
    }, [])

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

    const isNewContent = useAppSelector(state => state.feed.isNewContent)

    return (
        <div className='Feed'>

            {posts.length === 0 &&
                <div className='feed-loading'>
                    <Loading size={LoadingSize.LARGE} />

                </div>}

            {posts.length > 0 && <>

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