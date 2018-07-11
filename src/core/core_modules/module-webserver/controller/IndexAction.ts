import {Action} from './Action'
import * as routes from 'express-decorators';


@routes.basePath('/index')
export default class IndexAction extends Action {

    constructor(dirname) {
        super(dirname);
    }

    @routes.get('/index')
    async index(request,response) {
        this.render(response,'index',{content:"HALLO",data:'KOT'});
    }

}

