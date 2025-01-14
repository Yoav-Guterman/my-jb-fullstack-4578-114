import { useEffect, useState } from 'react'
import PostModel from '../../../models/post/Post'
import './Feed.css'
import feed from '../../../services/feed'
import Post from '../post/Post'


export default function Feed() {

    const [posts, setPosts] = useState<PostModel[]>([])

    useEffect(() => {
        document.title = 'SN- Feed'
    })

    useEffect(() => {
        feed.getFeed()
            .then(setPosts)
            .catch(alert)
    }, [])

    return (
        <div className='Feed'>

            {posts.map(p => <Post
                key={p.id}
                post={p}
            ></Post>
            )}
        </div>
    )
}