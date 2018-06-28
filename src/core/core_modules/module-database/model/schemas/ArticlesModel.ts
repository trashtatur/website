import {Table, Column, Model,ForeignKey, Length, BelongsTo, PrimaryKey, AllowNull, CreatedAt, UpdatedAt, DeletedAt} from 'sequelize-typescript';
import {UserModel} from "./UserModel";



@Table
export class ArticlesModel extends Model<ArticlesModel> {

    @PrimaryKey
    @Column
    public id: number;

    @Length({max:20})
    @AllowNull(false)
    @Column
    public author: string;

    @Length({max:20})
    @AllowNull(false)
    @Column
    public path: string;

    @CreatedAt
    public createDate: Date;

    @UpdatedAt
    public updateDate: Date;

    @DeletedAt
    public deleteDate: Date;

    @ForeignKey(()=>UserModel)
    @Column
    public userId: number;

    @BelongsTo(()=>UserModel, 'userId')
    public user: UserModel

}



