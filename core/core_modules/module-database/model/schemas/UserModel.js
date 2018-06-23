import {Options, Attributes} from 'sequelize-decorators';
import {Model, DataTypes} from 'sequelize';
import {sequelize} from '../connector';
import ArticlesModel from './ArticlesModel'


@Options({
    sequelize,
    tableName: "User"
})
@Attributes({
    ID : {type : DataTypes.INTEGER, primaryKey: true},
    userName : {type: DataTypes.STRING(20), allowNull:false, unique: true},
    avatar: {type: DataTypes.STRING(20), allowNull:true},
    level : {type: DataTypes.INTEGER, allowNull: false}
})
class UserModel extends Model {

}

UserModel.hasMany(ArticlesModel);
ArticlesModel.belongsTo(UserModel);

export default UserModel;