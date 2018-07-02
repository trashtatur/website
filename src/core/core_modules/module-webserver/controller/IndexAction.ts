import {Action} from './Action'
import * as routes from 'express-decorators';


@routes.basePath('/index')
export default class IndexAction extends Action {

    constructor() {
        super();
    }

    @routes.get('/index')
    async index(request,response) {
        response.send(this.render('Hello World'));
    }
}

