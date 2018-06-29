import * as express from 'express'
import loggerHelper from "cm/module-logger/helper/logger-helper";

let logger = loggerHelper.provide();

class WebServer {
    private readonly port: number;
    public express;

    constructor() {
        this.port = 3000;
        /**
         * @type {express}
         */
        this.express = express();
    }
    startServer(): void {
        this.express.listen(this.port, function () {
            logger.info("Server listening on port 3000")
        });
    }

    getServer(): express {
        return this.express;
    }


}

let webserver = new WebServer();
export default webserver


