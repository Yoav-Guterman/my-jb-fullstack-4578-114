import { useForm } from 'react-hook-form'
import './NewPost.css'
import PostDraft from '../../../models/post/PostDraft'
import { ChangeEvent, useState } from 'react'
import LoadingButton from '../../common/loadingButton/LoadingButton'
import { useDispatch } from 'react-redux'
import { newPost } from '../../../redux/profileSlice'
import useService from '../../../hooks/useService'
import ProfileService from '../../../services/auth-aware/Profile'

export default function NewPost(): JSX.Element {

    const [previewImageSrc, setPreviewImageSrc] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { register, handleSubmit, reset, formState } = useForm<PostDraft>()

    const dispatch = useDispatch()

    const profileService = useService(ProfileService)

    async function submit(draft: PostDraft) {
        try {

            draft.postImage = (draft.postImage as unknown as FileList)[0]
            setIsLoading(true)
            const NewPostFromServer = await profileService.create(draft)
            setPreviewImageSrc("")
            dispatch(newPost(NewPostFromServer))
            reset()

        } catch (e) {
            alert(e)
        } finally {
            setIsLoading(false)
        }
    }

    function previewImage(event: ChangeEvent<HTMLInputElement>) {
        const file = event.currentTarget.files && event.currentTarget.files[0]
        if (file) {
            const imageSource = URL.createObjectURL(file)
            setPreviewImageSrc(imageSource)
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

                <input type="file" accept='image/png, image/jpg, image/png,' {...register('postImage')} onChange={previewImage} />
                {previewImageSrc && <img src={previewImageSrc} />}

                {isLoading === false &&
                    <button className="btn btn-primary btn-sm">Add Post</button>}
                {isLoading === true &&
                    <LoadingButton message={'adding new post'} />}
            </form>
        </div>
    )
}