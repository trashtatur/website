let exphbs  = require('express-handlebars');
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
        this.express.set('view engine','hbs');
        this.express.set('views',__dirname+'/../../../../templates/');
        this.express.engine('hbs',exphbs({extname: 'hbs', defaultLayout:__dirname+'/../../../../templates/index/index'}));
        this.express.use(express.static(__dirname+'/../../../../templates/'));
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


