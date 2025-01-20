import { useEffect } from 'react'
import './Feed.css'
import feed from '../../../services/feed'
import Post from '../post/Post'
import useTitle from '../../../hooks/useTitle'
import Loading from '../../common/loading/Loading'
import { LoadingSize } from '../../../models/loading/loadingSize'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { init } from '../../../redux/feedSlice'


export default function Feed() {

    const posts = useAppSelector(state => state.feed.posts)

    const dispatch = useAppDispatch()
    useTitle('SN- Feed')

    useEffect(() => {
        (async () => {
            try {
                const postsFromServer = await feed.getFeed()
                dispatch(init(postsFromServer))
            } catch (e) {
                console.log(e)
            }
        })()
    }, [])

    return (
        <div className='Feed'>

            {posts.length === 0 &&
                <div className='feed-loading'>
                    <Loading size={LoadingSize.LARGE} />
                </div>}


            {posts.length > 0 && <>

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