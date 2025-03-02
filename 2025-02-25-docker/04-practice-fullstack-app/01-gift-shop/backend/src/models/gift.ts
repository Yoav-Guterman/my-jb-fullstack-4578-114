import { AllowNull, BelongsTo, BelongsToMany, Column, DataType, Default, ForeignKey, HasMany, Index, Model, PrimaryKey, Table } from "sequelize-typescript";
import TargetAudience from "./audienceTarget";


@Table({
    underscored: true
})
export default class Gift extends Model {

    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id: string

    @ForeignKey(() => TargetAudience)
    @AllowNull(false)
    @Column(DataType.UUID)
    targetAudienceId: string

    @AllowNull(false)
    @Column(DataType.STRING(40))
    name: string

    @AllowNull(false)
    @Column(DataType.STRING(64))
    description: string

    @AllowNull(false)
    @Column(DataType.DECIMAL(10, 2))  // For money values with 2 decimal places
    price: number

    @AllowNull(false)
    @Column(DataType.INTEGER)
    discount: number

    @BelongsTo(() => TargetAudience)
    targetAudience: TargetAudience
}