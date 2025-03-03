import {
    AllowNull,
    BelongsTo,
    BelongsToMany,
    Column,
    DataType,
    Default,
    ForeignKey,
    HasMany,
    Index,
    Model,
    PrimaryKey,
    Table
} from "sequelize-typescript";
import Type from "./type";

@Table({
    underscored: true
})
export default class Furniture extends Model {

    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id: string

    @ForeignKey(() => Type)
    @AllowNull(false)
    @Column(DataType.UUID)
    typeId: string

    @AllowNull(false)
    @Column(DataType.STRING(40))
    size: string

    @AllowNull(false)
    @Column(DataType.STRING(40))
    color: string

    @AllowNull(false)
    @Column(DataType.DECIMAL(10, 2))
    price: number

    @BelongsTo(() => Type)
    types: Type
}