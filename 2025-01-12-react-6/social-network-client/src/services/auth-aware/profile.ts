import Post from "../../models/post/Post";
import PostDraft from "../../models/post/PostDraft";

export default class Profile {
    async getProfile(): Promise<Post[]> {
        const response = await axiosInstance.get<Post[]>(`${import.meta.env.VITE_REST_SERVER_URL}/posts`)
        return response.data
    }

    async getPost(id: string): Promise<Post> {
        const response = await axiosInstance.get<Post>(`${import.meta.env.VITE_REST_SERVER_URL}/posts/${id}`)
        return response.data
    }

    async update(id: string, draft: PostDraft): Promise<Post> {
        const { title, body } = draft
        const response = await axiosInstance.patch<Post>(`${import.meta.env.VITE_REST_SERVER_URL}/posts/${id}`, { title, body })
        return response.data
    }

    async remove(id: string): Promise<boolean> {
        const response = await axiosInstance.delete<boolean>(`${import.meta.env.VITE_REST_SERVER_URL}/posts/${id}`)
        return response.data
    }

    async create(draft: PostDraft): Promise<Post> {
        const response = await axiosInstance.post<Post>(`${import.meta.env.VITE_REST_SERVER_URL}/posts/`, draft)
        return response.data
    }
}