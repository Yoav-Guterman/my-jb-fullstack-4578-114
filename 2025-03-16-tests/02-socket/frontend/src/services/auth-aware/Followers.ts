import User from "../../models/user/User";
import AuthAware from "./AuthAware";

export default class Followers extends AuthAware {
    async getUsers(): Promise<User[]> {
        const response = await this.axiosInstance.get<User[]>(`${import.meta.env.VITE_REST_SERVER_URL}/follows/followers`)
        return response.data
    }
}