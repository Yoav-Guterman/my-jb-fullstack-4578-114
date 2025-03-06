import {
    AllowNull,
    Column,
    DataType,
    Default,
    HasMany,
    Model,
    PrimaryKey,
    Table
} from "sequelize-typescript";
import Employee from "./employee";

@Table({
    underscored: true,
})
export default class Job extends Model {

    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id: string

    @AllowNull(false)
    @Column
    name: string

    @HasMany(() => Employee)
    employees: Employee[]
}
