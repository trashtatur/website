let exphbs  = require('express-handlebars');
let path = require('path');
import {partialDirs,registerPartials} from "../../../../PartialsRegistrar";
import * as express from 'express'
import logger from "../../module-logger";

/**
 * @name Webserver
 * @description Provides hosting, enables static paths and templating and handles core connecting function
 * @module module-webserver
 * @devnotes TODO Add method to add helper functions  to the webservers templating engine
 */
export class WebServer {
    private readonly port: number;
    public express;
    private readonly hbsInstance;

    constructor() {
        this.hbsInstance = exphbs.create();
        this.port = 3000;
        /**
         * @type {express}
         */
        this.express = express();
        this.setTemplateEngine();
    }
    startServer(): void {
        this.express.listen(this.port, function () {
            logger.info("Server listening on port 3000")
        });
    }

    /**
     * Registers server path to paths that will be used by the clients
     *
     * @param virtualPath The path on the client. the dom path
     * @param actualPath The actual path on the server
     */
    addStaticRoute(virtualPath:string,actualPath:string): void {
        this.express.use(virtualPath,express.static(actualPath));
        logger.debug('Added static route '+virtualPath+" for Path "+actualPath)
    }

    /**
     * Sets up the handlebars templating engine
     */
    private setTemplateEngine() {
        registerPartials();
        let engine = exphbs({
            extname: 'hbs',
            defaultLayout:__dirname+'/../frontend/layouts/master',
            partialsDir: partialDirs,
        });
        this.express.set('view engine','hbs');
        this.express.set('views',path.resolve(__dirname,'../../../../'));  //src
        this.express.engine('hbs',engine);
    }


    getServer(): express {
        return this.express;
    }
}


