import {Options, Attributes} from 'sequelize-decorators';
import {Model, DataTypes} from 'sequelize';
import {sequelize} from '../connector';


@Options({
    sequelize,
    tableName: "Articles"
})

@Attributes({
    ID : {type : DataTypes.INTEGER, primaryKey: true},
    author : {type: DataTypes.STRING(20), allowNull:false},
    path: {type: DataTypes.STRING(20), allowNull:false},
    date : {type: DataTypes.STRING(20), allowNull: false},
    hasLatex: {type: DataTypes.BOOLEAN, defaultValue:false},
})

class ArticlesModel extends Model {

}



export default ArticlesModel;