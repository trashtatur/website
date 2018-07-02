import * as express from 'express'
import logger from "../../module-logger";


export class WebServer {
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


