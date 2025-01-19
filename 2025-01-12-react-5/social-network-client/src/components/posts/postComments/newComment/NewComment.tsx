import { useForm } from 'react-hook-form'
import './NewComment.css'
import CommentDraft from '../../../../models/comment/CommentDraft'
import commentsService from '../../../../services/comment'
import CommentModel from '../../../../models/comment/Comment'
import { useState } from 'react'
import LoadingButton from '../../../common/loadingButton/LoadingButton'

interface NewCommentProps {
    postId: string
    addComment(comment: CommentModel): void
}

export default function NewComment(props: NewCommentProps): JSX.Element {

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { postId, addComment } = props
    const {
        register,
        handleSubmit,
        formState,
        reset
    } = useForm<CommentDraft>()

    async function submit(draft: CommentDraft) {
        try {
            setIsLoading(true)
            const newComment = await commentsService.create(postId, draft)
            reset()
            addComment(newComment)
            setIsLoading(false)
        } catch (e) {
            console.warn(e)
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