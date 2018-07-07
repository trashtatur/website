let exphbs  = require('express-handlebars');
let fs = require('fs');
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
        this.setTemplateEngine();
    }
    startServer(): void {
        this.express.listen(this.port, function () {
            logger.info("Server listening on port 3000")
        });
    }

    addStaticRoute(virtualPath:string,actualPath:string): void {
        this.express.use(virtualPath,express.static(actualPath));
        logger.debug('Added static route '+virtualPath+" for Path "+actualPath)
    }

    private setTemplateEngine() {
        this.express.set('view engine','hbs');
        this.express.set('views',__dirname+'/../../../../templates/');
        this.express.engine('hbs',exphbs({extname: 'hbs', defaultLayout:__dirname+'/../../../../templates/index/layout/index'}));
    }


    getServer(): express {
        return this.express;
    }
}


