import FurnitureDraft from "./FurnitureDraft";

export default interface Furniture extends FurnitureDraft {
    id: string,
    createdAt: string,
    updatedAt: string
}