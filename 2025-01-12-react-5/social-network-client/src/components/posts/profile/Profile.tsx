import { useEffect, useState } from 'react'
import './Profile.css'
import PostModel from '../../../models/post/Post'
import profile from '../../../services/profile'
import Post from '../post/Post'
import NewPost from '../new/NewPost'
import CommentModel from '../../../models/comment/Comment'
import Loading from '../../common/loading/Loading'
import useTitle from '../../../hooks/useTitle'
import { LoadingSize } from '../../../models/loading/loadingSize'



export default function Profile() {

    const [posts, setPosts] = useState<PostModel[]>([])

    useTitle('SN- Profile')

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

    function addComment(comment: CommentModel): void {
        const postWithNewComment = [...posts]
        const postToAddCommentTo = postWithNewComment.find(post => post.id === comment.postId)
        if (postToAddCommentTo) {
            postToAddCommentTo.comments.unshift(comment)
        }
        setPosts(postWithNewComment)
    }

    return (
        <div className='Profile'>

            {posts.length === 0 && (
                <div className='Profile-loading'>
                    <Loading size={LoadingSize.LARGE} />
                </div>
            )}

            {posts.length > 0 && <>
                <NewPost addPost={addPost} />
                {posts.map(p => <Post
                    key={p.id}
                    post={p}
                    isAllowActions={true}
                    remove={remove}
                    addComment={addComment}
                >
                </Post>)}

            </>
            }

        </div>
    )
}