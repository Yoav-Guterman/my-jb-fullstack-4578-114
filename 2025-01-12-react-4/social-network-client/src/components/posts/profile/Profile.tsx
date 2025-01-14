import { useEffect, useState } from 'react'
import './Profile.css'
import PostModel from '../../../models/post/Post'
import profile from '../../../services/profile'
import Post from '../post/Post'
import NewPost from '../new/NewPost'



export default function Profile() {

    const [posts, setPosts] = useState<PostModel[]>([])

    useEffect(() => {
        document.title = 'SN- Profile'
    })

    useEffect(() => {
        profile.getProfile()
            .then(setPosts)
            .catch(alert)
    }, [])

    function remove(id: string): void {
        const index = posts.findIndex(post => post.id === id)
        if (index > -1) {
            const postsAfterRemoval = [...posts]
            postsAfterRemoval.splice(index, 1)
            setPosts(postsAfterRemoval)
        }
    }

    function addPost(post: PostModel): void {
        setPosts([post, ...posts])
    }

    return (
        <div className='Profile'>
            <NewPost addPost={addPost} />
            {posts.map(p => <Post
                key={p.id}
                post={p}
                isAllowActions={true}
                remove={remove}
            >
            </Post>)}

        </div>
    )
}