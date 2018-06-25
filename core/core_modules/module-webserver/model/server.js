import express from 'express';
import loggerHelper from "../../module-logger";

let logger = loggerHelper.provide();

class WebServer {

    constructor() {
        this.port = 3000;
        /**
         * @type {express}
         */
        this.app = express();
    }
    startServer() {
        this.app.listen(this.port, function () {
            logger.info("Server listening on port 3000")
        });
    }

    /**
     * @param {string} route
     * @param {function} fun
     */
    addRoute(route,fun) {
        if (fun.length>=2) {
            this.app.get(route,fun)
        }
    }
}

const webserver = new WebServer();

export default webserver;


