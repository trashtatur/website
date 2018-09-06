import {webserver} from './core/core_modules/module-webserver';
let database =  require('./core/core_modules/module-database');
let controllerRegistrar = require('./ControllerRegistrar');
let staticRegistrar = require('./StaticsRegistrar');
let bundler = require('./bundler');
controllerRegistrar.registerControllers();
staticRegistrar.registerTemplates();
bundler.bundleJSDependancies();
webserver.startServer();


