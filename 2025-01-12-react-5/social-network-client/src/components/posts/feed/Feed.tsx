import { useEffect, useState } from 'react'
import PostModel from '../../../models/post/Post'
import './Feed.css'
import feed from '../../../services/feed'
import Post from '../post/Post'
import CommentModel from '../../../models/comment/Comment'
import useTitle from '../../../hooks/useTitle'
import Loading from '../../common/loading/Loading'
import { LoadingSize } from '../../../models/loading/loadingSize'


export default function Feed() {

    const [posts, setPosts] = useState<PostModel[]>([])

    useTitle('SN- Feed')

    useEffect(() => {
        feed.getFeed()
            .then(setPosts)
            .catch(alert)
    }, [])

    function addComment(comment: CommentModel): void {
        const postWithNewComment = [...posts]

        const postToAddCommentTo = postWithNewComment.find(post => post.id === comment.postId)
        if (postToAddCommentTo) {
            postToAddCommentTo.comments.unshift(comment)
        }
        setPosts(postWithNewComment)
    }

    return (
        <div className='Feed'>

            {posts.length === 0 && <Loading size={LoadingSize.LARGE} />}

            {posts.length > 0 && <>

                {posts.map(p => <Post
                    key={p.id}
                    post={p}
                    addComment={addComment}
                ></Post>
                )}
            </>
            }
        </div>

    )
}