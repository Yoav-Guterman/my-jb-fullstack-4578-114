import axios from "axios"
import Job from "../models/job/job"

class Jobs {
    async getAll(): Promise<Job[]> {
        const response = await axios(`${import.meta.env.VITE_REST_SERVER_URL}/jobs`)
        return response.data
    }
}

const jobsService = new Jobs()
export default jobsService