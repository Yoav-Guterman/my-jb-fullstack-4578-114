import './Post.css'
import PostModel from '../../../models/post/Post'
import profileService from '../../../services/auth-aware/profile'
import { useNavigate } from 'react-router-dom'
import Comments from '../postComments/comments/Comments'
import LoadingButton from '../../common/loadingButton/LoadingButton'
import { useState } from 'react'
import { remove } from '../../../redux/profileSlice'
import { useAppDispatch } from '../../../redux/hooks'

interface PostProps {
    post: PostModel
    isAllowActions?: boolean
}

export default function Post(props: PostProps): JSX.Element {
    const { title, body, createdAt, id, comments } = props.post
    const { name } = props.post.user
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState<boolean>(false)



    const dispatch = useAppDispatch()

    async function deleteMe() {
        if (confirm(`are you sure you want to delete "${title}"`))
            try {
                setIsLoading(true)
                await profileService.remove(id)
                dispatch(remove({ id }))
            } catch (e) {
                alert(e)
            } finally {
                setIsLoading(false)
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
            />
        </div>
    )
}