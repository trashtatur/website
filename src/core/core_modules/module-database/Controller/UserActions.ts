import {Action} from '../../module-webserver/controller/Action';
import * as routes from 'express-decorators';

@routes.basePath('API/database/UsersAction')
export default class ArticleActions extends Action{

    constructor(dirname) {
        super(dirname);
    }
}