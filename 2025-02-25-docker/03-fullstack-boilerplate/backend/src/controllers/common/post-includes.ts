import Comment from "../../models/comment"
import User from "../../models/user"

const postIncludes = {
    include: [
        User,
        {
            model: Comment,
            include: [User]
        }
    ]
}

export default postIncludes