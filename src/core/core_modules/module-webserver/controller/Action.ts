import express from 'express';
import * as web from 'express-decorators';
import {webserver} from '../index'


export class Action {
    private readonly server: express;

    constructor() {
        this.server = webserver.getServer();
        web.register(this.server,this)
    }
    /**
     *
     * @param {string} file
     * @param {array|map} data
     * @returns {*} the rendered page
     */
    render(file:string,data:any = null) {
        this.server.render(file,data)
    }
}