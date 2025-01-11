import { useEffect, useState } from 'react'
import Post from '../../../models/post/Post'
import './Feed.css'
import feed from '../../../services/feed'

export default function Feed() {

    const [posts, setPosts] = useState<Post[]>([])

    useEffect(() => {
        feed.getFeed()
            .then(setPosts)
            .catch(alert)
    }, [])

    return (
        <div className='Feed'>
            <p>your feed:</p>
            <ul>
                {posts.map(({ id, title }) => <li key={id} >{title}</li>)}
            </ul>
        </div>
    )
}