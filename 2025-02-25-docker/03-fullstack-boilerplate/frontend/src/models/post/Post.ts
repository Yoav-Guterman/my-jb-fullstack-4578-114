import User from "../user/User";
import PostDraft from "./PostDraft";

export default interface Post extends PostDraft {
    id: string,
    userId: string,
    title: string,
    body: string,
    imageUrl: string,
    createdAt: string,
    user: User,
    comments: Comment[]
}