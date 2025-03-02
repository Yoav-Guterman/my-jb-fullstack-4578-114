import axios from "axios";

import GiftDraftModel from "../models/gift/GiftDraftModel";
import GiftModel from "../models/gift/GiftModel";

class Gift{
    async addGift(draft: GiftDraftModel): Promise<GiftModel> {
        const response = await axios.post<GiftModel>(`${import.meta.env.VITE_REST_SERVER_URL}/gift`, draft)
        return response.data
    }
}

const gift = new Gift()
export default gift
