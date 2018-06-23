import express from 'express';



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
            console.log("Server listening on port 3000")
        });
    }
}

const webserver = new WebServer();

export default webserver;


