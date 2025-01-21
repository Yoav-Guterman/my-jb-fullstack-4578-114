import { useForm } from 'react-hook-form'
import './NewPost.css'
import PostDraft from '../../../models/post/PostDraft'
import profileService from '../../../services/auth-aware/profile'
import { useState } from 'react'
import LoadingButton from '../../common/loadingButton/LoadingButton'
import { useDispatch } from 'react-redux'
import { newPost } from '../../../redux/profileSlice'


export default function NewPost(): JSX.Element {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { register, handleSubmit, reset, formState } = useForm<PostDraft>()

    const dispatch = useDispatch()

    async function submit(draft: PostDraft) {
        try {
            setIsLoading(true)
            const NewPostFromServer = await profileService.create(draft)
            dispatch(newPost(NewPostFromServer))
            reset()

        } catch (e) {
            alert(e)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className='NewPost'>
            <form onSubmit={handleSubmit(submit)}>
                <input className='form-control' placeholder='title' {...register('title', {
                    required: {
                        value: true,
                        message: 'you must provide a title'
                    },
                    minLength: {
                        value: 10,
                        message: 'title must be 10 chars long'
                    }
                })} />
                <span className='error'>{formState.errors.title?.message}</span>
                <textarea className='form-control' placeholder='post body' {...register('body',
                    {
                        required: {
                            value: true,
                            message: 'you must provide a body'
                        },
                        minLength: {
                            value: 20,
                            message: 'body must be 20 chars long'
                        }
                    }
                )}></textarea>
                <span className='error'>{formState.errors.body?.message}</span>

                {isLoading === false &&
                    <button className="btn btn-primary btn-sm">Add Post</button>}
                {isLoading === true &&
                    <LoadingButton message={'adding new post'} />}
            </form>
        </div>
    )
}