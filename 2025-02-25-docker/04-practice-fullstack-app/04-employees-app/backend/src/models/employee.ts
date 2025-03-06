import {
    AllowNull,
    BelongsTo,
    Column,
    DataType,
    Default,
    ForeignKey,
    Model,
    PrimaryKey,
    Table
} from "sequelize-typescript";
import Job from "./job";

@Table({
    underscored: true,
})
export default class Employee extends Model {

    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id: string

    @ForeignKey(() => Job)
    @AllowNull(false)
    @Column(DataType.UUID)
    jobId: string

    @AllowNull(false)
    @Column
    firstName: string

    @AllowNull(false)
    @Column
    lastName: string

    @AllowNull(false)
    @Column
    address: string

    @AllowNull(false)
    @Column(DataType.DATE)
    employmentDate: Date

    @BelongsTo(() => Job)
    job: Job
}
