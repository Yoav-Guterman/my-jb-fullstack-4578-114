import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import PostDraft from '../../../models/post/PostDraft'
import ProfileService from '../../../services/auth-aware/Profile'
import './EditPosts.css'
import LoadingButton from '../../common/loadingButton/LoadingButton'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { update } from '../../../redux/profileSlice'
import useService from '../../../hooks/useService'


export default function EditPost(): JSX.Element {
    const [editPostLoading, setEditPostLoading] = useState<boolean>(false)

    const profileService = useService(ProfileService)

    const { id } = useParams<'id'>()
    const { handleSubmit, register, formState, reset } = useForm<PostDraft>()
    const Navigate = useNavigate()

    const post = useAppSelector(state => state.profile.posts).find(p => p.id === id)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (post) {
            reset({
                title: post.title,
                body: post.body
            })
        } else {
            alert('Post not found')
            Navigate('/profile')
        }
    }, [post, reset, Navigate])

    async function submit(draft: PostDraft) {
        try {
            if (id) {
                setEditPostLoading(true)
                const postFromServer = await profileService.update(id, draft)
                dispatch(update(postFromServer))
                Navigate('/profile')
            }
        } catch (e) {
            alert(e)
        } finally {
            setEditPostLoading(false)
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
                {editPostLoading ?
                    <LoadingButton message={'updating post'} /> :
                    <button>Update Post</button>}

            </form>
        </div>
    )
}