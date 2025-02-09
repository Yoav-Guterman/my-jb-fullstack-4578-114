import { AllowNull, Column, DataType, Default, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table({
    underscored: true
})
export default class Follows extends Model {

    @PrimaryKey
    @AllowNull(false)
    @Column(DataType.UUID)
    followerId: string

    @PrimaryKey
    @AllowNull(false)
    @Column(DataType.UUID)
    followeeId: string
}