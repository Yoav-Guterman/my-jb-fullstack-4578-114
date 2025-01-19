import './Post.css'
import PostModel from '../../../models/post/Post'
import profileService from '../../../services/profile'
import { useNavigate } from 'react-router-dom'
import Comments from '../postComments/comments/Comments'
import CommentModel from '../../../models/comment/Comment'
import LoadingButton from '../../common/loadingButton/LoadingButton'
import { useState } from 'react'

interface PostProps {
    post: PostModel
    isAllowActions?: boolean
    remove?(id: string): void
    addComment(comment: CommentModel): void

}

export default function Post(props: PostProps): JSX.Element {
    const { title, body, createdAt, id, comments } = props.post
    const { name } = props.post.user
    const { addComment } = props
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState<boolean>(false)

    async function deleteMe() {
        if (props.remove && confirm(`are you sure you want to delete "${title}"`))
            try {
                setIsLoading(true)
                await profileService.remove(id)
                props.remove(id)
                setIsLoading(false)
                // i was able to delete from the server
                // this is the point to affect the UI
                // in other words, we need to change the state
            } catch (e) {
                alert(e)
            }
    }

    function editMe() {
        navigate(`/edit/${id}`)
    }

    return (
        <div className='Post'>
            <div>
                {title}
            </div>
            <div>
                {name} at {createdAt}
            </div>
            <div>
                {body}
            </div>
            {props.isAllowActions &&
                <div className='buttons'>
                    <button type="button" className="btn btn-secondary btn-sm" onClick={editMe}>Edit</button>
                    {isLoading ? <LoadingButton message={'deleting post'} /> :
                        <button type="button" className="btn btn-danger btn-sm" onClick={deleteMe}>Delete</button>}
                </div>
            }

            <Comments
                comments={comments}
                postId={id}
                addComment={addComment}
            />
        </div>
    )
}