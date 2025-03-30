import { useForm } from 'react-hook-form'
import './NewComment.css'
import CommentDraft from '../../../../models/comment/CommentDraft'
import { useState } from 'react'
import LoadingButton from '../../../common/loadingButton/LoadingButton'
import { useAppDispatch } from '../../../../redux/hooks'
import { addComment as addCommentProfile } from '../../../../redux/profileSlice'
import { addComment as addCommentFeed } from '../../../../redux/feedSlice'
import CommentsService from '../../../../services/auth-aware/Comments'
import useService from '../../../../hooks/useService'


interface NewCommentProps {
    postId: string
}

export default function NewComment(props: NewCommentProps): JSX.Element {

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const commentsService = useService(CommentsService)

    const { postId } = props
    const {
        register,
        handleSubmit,
        formState,
        reset
    } = useForm<CommentDraft>()

    const dispatch = useAppDispatch()

    async function submit(draft: CommentDraft) {
        try {
            setIsLoading(true)
            const newComment = await commentsService.create(postId, draft)
            reset()
            dispatch(addCommentProfile(newComment))
            dispatch(addCommentFeed(newComment))
        } catch (e) {
            console.warn(e)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className='NewComment'>
            <form onSubmit={handleSubmit(submit)}>
                <textarea className="form-control" placeholder="enter your comment..." {...register('body', {
                    required: {
                        value: true,
                        message: 'Comment body is mandatory'
                    },
                    minLength: {
                        value: 20,
                        message: 'comment must be at least 20 chars long'
                    }
                })

                }></textarea>
                <span>{formState.errors.body?.message}</span>

                {isLoading === false &&
                    <button type="submit" className="btn btn-primary btn-sm">Post Comment</button>
                }

                {isLoading && <LoadingButton message={'posting new comment'} />}

            </form>
        </div >
    )

}