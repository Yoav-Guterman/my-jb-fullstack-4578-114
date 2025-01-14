import { useEffect, useState } from 'react'
import './Comments.css'
import comments from '../../../../services/comment'
import Comment from '../../../../models/comment/Comment'
import NewComment from '../newComment/NewComments'

interface CommentsProps {
    postId: string
}

export default function Comments({ postId }: CommentsProps) {
    const [postComments, setPostComments] = useState<Comment[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        comments.getComments(postId)
            .then(data => {
                setPostComments(data)
                setIsLoading(false)
            })
            .catch(error => {
                console.error('Failed to fetch comments:', error)
                setIsLoading(false)
            })
    }, [postId])

    function addComment(comment: Comment) {
        setPostComments([comment, ...postComments])  // Add new comment to the top
    }

    if (isLoading) {
        return <div className='Comments'>Loading comments...</div>
    }

    return (
        <div className='Comments'>
            <div>Total Comments: {postComments.length}</div>
            <NewComment postId={postId} onCommentAdd={addComment} />
            <div className="comments-list">
                {postComments.map(comment => (
                    <div key={comment.id} className="comment">
                        <div className="comment-header">
                            By: {comment.user?.name || 'Anonymous'}
                            at {new Date(comment.createdAt).toLocaleString()}
                        </div>
                        <div className="comment-body">
                            {comment.body}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )

}