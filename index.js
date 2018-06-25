import dbSync from "cm/module-database";
import webserverHelper from 'cm/module-webserver'
import loggerHelper from 'cm/module-logger'
let  webserver = webserverHelper.provide();


webserver.addRoute('/',function (req,res) {
    res.send("Hello World")
});

webserver.startServer();