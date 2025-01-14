import { useEffect, useState } from 'react'
import './Comments.css'
import CommentModel from '../../../../models/comment/Comment'
import NewComment from '../newComment/NewComments'

interface CommentProps {
    comment: CommentModel
}

export default function Comment(props: CommentProps): JSX.Element {

    const { user: { name }, body, createdAt } = props.comment
    return (
        <div className='COomment'>
            <div>
                {name} said on {createdAt}
            </div>
            <div>
                {body}
            </div>
        </div>
    )
}

