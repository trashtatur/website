import webserverHelper from 'cm/module-webserver'

let  webserver = webserverHelper.provide();

webserver.addRoute('/',function (req,res) {
    res.send("Hello World")
});

webserver.startServer();

