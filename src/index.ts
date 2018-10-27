import {webserver} from './core/core_modules/module-webserver';
let database =  require('./core/core_modules/module-database');
let controllerRegistrar = require('./ControllerRegistrar');
let staticRegistrar = require('./StaticsRegistrar');

/**
 * @name index
 * @description main file that starts the application
 * @module helper
 * @devnotes
 */
controllerRegistrar.registerControllers();
staticRegistrar.registerTemplates();
webserver.startServer();


