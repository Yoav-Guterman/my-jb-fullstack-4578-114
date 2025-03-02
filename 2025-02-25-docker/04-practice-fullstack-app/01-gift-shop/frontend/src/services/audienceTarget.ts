import axios from "axios";

import AudienceTargetModel from "../models/audienceTarget/AudienceTargetModel";
import GiftModel from "../models/gift/GiftModel";

class AudienceTarget {
    async getAudienceTargets(): Promise<AudienceTargetModel[]> {
        const response = await axios.get<AudienceTargetModel[]>(`${import.meta.env.VITE_REST_SERVER_URL}/targetAudience`)
        return response.data
    }

    async getGiftsFilteredByTargetAudience(id: string): Promise<GiftModel[]> {
        const response = await axios.get<GiftModel[]>(`${import.meta.env.VITE_REST_SERVER_URL}/targetAudience/${id}`)
        return response.data
    }
}

const audienceTarget = new AudienceTarget()
export default audienceTarget
