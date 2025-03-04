import './Post.css'
import PostModel from '../../../models/post/Post'
import { useNavigate } from 'react-router-dom'
import Comments from '../postComments/comments/Comments'
import LoadingButton from '../../common/loadingButton/LoadingButton'
import { useEffect, useState } from 'react'
import { clearNewPostId, remove } from '../../../redux/profileSlice'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import useService from '../../../hooks/useService'
import ProfileService from '../../../services/auth-aware/Profile'

interface PostProps {
    post: PostModel
    isAllowActions?: boolean
}

export default function Post(props: PostProps): JSX.Element {
    const { title, body, createdAt, id, comments, imageUrl } = props.post
    const { name } = props.post.user
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const profileService = useService(ProfileService)

    const dispatch = useAppDispatch()
    const newPostId = useAppSelector(state => state.profile.newPostId);

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


    useEffect(() => {
        if (id === newPostId) {
            // Clear the newPostId after animation duration
            const timer = setTimeout(() => {
                dispatch(clearNewPostId());
            }, 1000); // Match this with CSS animation duration
            return () => clearTimeout(timer);
        }
    }, [id, newPostId, dispatch]);

    return (
        <div className={`Post ${id === newPostId ? 'fade-in' : ''}`}>
            <div>
                {title}
            </div>
            {imageUrl &&
                <div className='imageContainer'>
                    <img src={imageUrl} />
                </div>
            }
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