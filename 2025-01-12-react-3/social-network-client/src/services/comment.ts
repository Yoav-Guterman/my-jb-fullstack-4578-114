import axios from "axios";
import Comment from "../models/comment/Comment";
import CommentDraft from "../models/comment/CommentDraft";

class Comments {
    async getComments(postId: string): Promise<Comment[]> {
        const response = await axios.get<Comment[]>(`${import.meta.env.VITE_REST_SERVER_URL}/comments/${postId}`)
        return response.data
    }

    async addComment(postId: string, draft: CommentDraft): Promise<Comment> {
        console.log('Sending comment data:', { ...draft, postId });

        const response = await axios.post<Comment>(
            `${import.meta.env.VITE_REST_SERVER_URL}/comments/${postId}/`, draft)
        return response.data
    }
}

const comments = new Comments()
export default comments