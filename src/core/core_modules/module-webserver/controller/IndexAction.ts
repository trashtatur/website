import {Action} from './Action'
import * as routes from 'express-decorators';


@routes.basePath('/index')
export default class IndexAction extends Action {

    constructor() {
        super();
    }

    @routes.get('/index')
    async index(request,response) {
        response.render('testout/layout/hello',{content:"HALLO"});
    }

    @routes.get('/testout')
    async testout(request,response) {
        response.render('test2/layout/asswipe',{data:"HEYOOO"})
    }
}

