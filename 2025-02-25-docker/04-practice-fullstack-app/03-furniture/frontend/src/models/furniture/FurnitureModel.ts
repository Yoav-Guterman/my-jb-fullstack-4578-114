import TypeModel from "../type/TypeModel";
import FurnitureModelDraft from "./FurnitureModelDraft";

export default interface FurnitureModel extends FurnitureModelDraft {
    id: string,
    types: TypeModel
}