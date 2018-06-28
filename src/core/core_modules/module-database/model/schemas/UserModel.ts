import {Table, Column, DataType, Length, Model, HasMany, PrimaryKey, Unique, AllowNull, CreatedAt, UpdatedAt, DeletedAt} from 'sequelize-typescript';
import {ArticlesModel} from "./ArticlesModel";


@Table
export class UserModel extends Model<UserModel> {

    @PrimaryKey
    @Length({max:20})
    @Column
    public id: number;

    @Unique
    @Column(
        DataType.STRING(20)
    )
    public userName: string;

    @Column
    public avatar: string;

    @AllowNull(false)
    @Column
    public level: number;

    @HasMany(()=>ArticlesModel, 'userId')
    public articles: ArticlesModel[]

}


