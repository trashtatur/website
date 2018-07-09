import express from 'express';
import * as web from 'express-decorators';
import {webserver} from '../index'
let path = require('path');


export class Action {
    private readonly server: express;
    private dirname: string;

    constructor(dirname) {
        this.dirname = this.formatDirName(dirname);
        this.server = webserver.getServer();
        web.register(this.server,this)
    }

    private formatDirName(dirname) {
        let dirArray = dirname.split(path.sep);
        dirArray.pop();
        dirArray.push('frontend');
        dirArray.push('views');
        dirArray.shift();
        return dirArray.join("/")+"/";
    }
    /**
     *
     * @param response
     * @param {string} file
     * @param {map} data
     * @returns {*} the rendered page
     */
    render (response, file:string, data:any = null) {
        response.render(this.dirname+file,data)
    }


}