import {Action} from 'cm/module-webserver/controller/Action';
import * as routes from 'express-decorators';
import Users from '../model/repositories/UserModelRepo';

@routes.basePath('API/database/UsersAction')
class ArticleActions extends Action{

}