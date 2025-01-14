import { useForm } from 'react-hook-form'
import './NewComments.css'
import CommentDraft from '../../../../models/comment/CommentDraft'
import comments from '../../../../services/comment'

interface NewCommentProps {
    postId: string
    onCommentAdd: (comment: any) => void  // We'll add the new comment to the list
}

export default function NewComment({ postId, onCommentAdd }: NewCommentProps) {
    const { register, handleSubmit, reset, formState } = useForm<CommentDraft>()

    async function submit(draft: CommentDraft) {
        try {
            const newComment = await comments.addComment(postId, draft)
            reset()  // Clear the form
            onCommentAdd(newComment)  // Update the comments list
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div className='NewComment'>
            <form onSubmit={handleSubmit(submit)}>
                <textarea
                    placeholder='Write a comment...'
                    {...register('body', {
                        required: {
                            value: true,
                            message: 'Comment cannot be empty'
                        },
                        minLength: {
                            value: 2,
                            message: 'Comment must be at least 2 characters'
                        }
                    })}
                />
                <span className='error'>{formState.errors.body?.message}</span>
                <button>Add Comment</button>
            </form>
        </div>
    )
}