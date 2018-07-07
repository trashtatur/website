import {webserver} from './core/core_modules/module-webserver';
let database =  require('./core/core_modules/module-database');
let controllerRegistrar = require('./ControllerRegistrar');
let staticRegistrar = require('./StaticsRegistrar');
controllerRegistrar.registerControllers();
staticRegistrar.registerTemplates();
webserver.startServer();


