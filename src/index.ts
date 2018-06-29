import webserverHelper from 'cm/module-webserver';
let database =  require('cm/module-database');
let controllerRegistrar = require('./ControllerRegistrar');
let  webserver = webserverHelper.provide();



webserver.startServer();