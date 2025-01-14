import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import PostDraft from '../../../models/post/PostDraft'
import profileService from '../../../services/profile'
import './EditPosts.css'

export default function EditPost(): JSX.Element {

    const { id } = useParams<'id'>()
    const { handleSubmit, register, formState, reset } = useForm<PostDraft>()
    const Navigate = useNavigate()

    useEffect(() => {
        if (id) {
            profileService.getPost(id)
                .then(reset)
                .catch(alert)
        }

    }, [])

    async function submit(draft: PostDraft) {
        try {
            if (id) {
                await profileService.update(id, draft)
                Navigate('/profile')
            }
        } catch (e) {
            alert(e)
        }
    }


    return (
        <div className='EditPost'>
            <form onSubmit={handleSubmit(submit)}>
                <input placeholder='title' {...register('title', {
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
                <textarea placeholder='post body' {...register('body',
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
                <button>Update Post</button>
            </form>
        </div>
    )
}