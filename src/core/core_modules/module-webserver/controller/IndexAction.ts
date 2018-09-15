import {Action} from './Action'
import * as routes from 'express-decorators';

/**
 * @name Index Controller
 * @description Provides Connection to landing page right now
 * @module module-webserver
 * @devnotes
 */
@routes.basePath('/index')
export default class IndexAction extends Action {

    constructor(dirname) {
        super(dirname);
    }

    @routes.get('/index')
    async index(request,response) {
        this.render(response,'index',{content:"HALLO",data:"MOIN MOIN"});
    }

}

