import webserverHelper from 'cm/module-webserver';
import index from 'cm/module-database';
let  webserver = webserverHelper.provide();


webserver.addRoute('/',function (req,res) {
    res.send("Hello World");
});

webserver.startServer();