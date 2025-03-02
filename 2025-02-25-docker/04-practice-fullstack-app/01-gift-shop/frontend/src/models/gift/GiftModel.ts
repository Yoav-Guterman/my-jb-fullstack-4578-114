import GiftDraftModel from "./GiftDraftModel";

export default interface GiftModel extends GiftDraftModel {
    name: string,
    targetAudienceId: string,
    description: string,
    price: number,
    discount: number
    imageUrl: string,
    createdAt: string,
    updatedAt: string
}