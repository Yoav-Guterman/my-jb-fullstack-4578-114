import {
    AllowNull,
    BelongsToMany,
    Column,
    DataType,
    Default,
    HasMany,
    Index,
    Model,
    PrimaryKey,
    Table
} from "sequelize-typescript";
import Furniture from "./furniture";

@Table({
    underscored: true
})
export default class Type extends Model {

    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id: string

    @AllowNull(false)
    @Column(DataType.STRING(40))
    name: string

    @HasMany(() => Furniture)
    furnitures: Furniture[]
}