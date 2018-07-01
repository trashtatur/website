import handlebars from 'handlebars';
import express from 'express';
import * as web from 'express-decorators';
import server from '../index'


export class Action {
    private readonly server: express;

    constructor() {
        this.server = server.getServer();
        web.register(this.server,this)
    }
    /**
     *
     * @param {string} file
     * @param {array|map} data
     * @returns {*} the rendered page
     */
    render(file:string,data:any = null) {
        let template = handlebars.compile(file);
        return template(data);
    }
}