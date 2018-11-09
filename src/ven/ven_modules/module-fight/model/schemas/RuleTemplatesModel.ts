import {
    AllowNull,
    BelongsTo,
    Column,
    DataType,
    ForeignKey,
    Model,
    PrimaryKey,
    Table,
    Unique
} from "sequelize-typescript";
import {UserModel} from "../../../../../core/core_modules/module-database/model/schemas/UserModel";

@Table
export class RuleTemplatesModel extends Model<RuleTemplatesModel> {

    @PrimaryKey
    @Column
    public id: number;

    @AllowNull(true)
    @ForeignKey(() => UserModel)
    @Column
    public userId: number;

    @BelongsTo(() => UserModel, 'userId')
    public user: UserModel;

    @Unique
    @Column(
        DataType.STRING(30)
    )
    public templateName: string;

    @Column(
        DataType.TEXT
    )
    public templateData;

}
