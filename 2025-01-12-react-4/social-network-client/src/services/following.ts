import axios from "axios";
import User from "../models/user/User";

class Following {
    async getUsers(): Promise<User[]> {
        const response = await axios.get<User[]>(`${import.meta.env.VITE_REST_SERVER_URL}/follows/following`)
        return response.data
    }

    async unFollow(userId: string): Promise<void> {
        await axios.post(`${import.meta.env.VITE_REST_SERVER_URL}/follows/unfollow/${userId}`)
    }

    async isFollowing(userId: string): Promise<boolean> {
        const followingUsers = await this.getUsers()
        return followingUsers.some(user => user.id === userId)
    }
}

// singleton
const following = new Following()
export default following