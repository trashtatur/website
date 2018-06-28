import {Action} from 'cm/module-webserver/controller/Action';
import * as routes from 'express-decorators';
import Articles from '../model/repositories/ArticlesModelRepo';

@routes.basePath('API/database/ArticlesAction')
class ArticleActions extends Action{

}