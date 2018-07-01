import webserver from 'cm/module-webserver';
let database =  require('cm/module-database');
let controllerRegistrar = require('./ControllerRegistrar');

controllerRegistrar.registerControllers();
webserver.startServer();


