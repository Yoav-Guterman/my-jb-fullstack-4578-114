import { PostComment } from "../comment/comment.model";
import { User } from "../user/user.model";
import { Draft } from "./post.model";

export interface Post extends Draft {
    id: string,
    title: string,
    body: string,
    createdAt: string,
    user: User,
    comments: PostComment[]
}
