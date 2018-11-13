import {Action} from "../../../core_modules/module-webserver/controller/Action";
import * as routes from 'express-decorators';

/**
 * @name FightscreenActions
 * @description Provides a fight overview helper for the pen and paper module
 * @module fight
 */
@routes.basePath('/PP/fightScreen')
export default class FightscreenActions extends Action{

    constructor(dirname) {
        super(dirname)
    }

    @routes.get('/order')
    async order(request,response) {
        this.render(response,'fightorder',{title:"Pen and Paper Fight Helper"})
    }

}