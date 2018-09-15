import {webserver} from './core/core_modules/module-webserver';
let database =  require('./core/core_modules/module-database');
let controllerRegistrar = require('./ControllerRegistrar');
let staticRegistrar = require('./StaticsRegistrar');
let bundler = require('./bundler');

/**
 * @name index
 * @description main file that starts the application
 * @module helper
 * @devnotes
 */
controllerRegistrar.registerControllers();
staticRegistrar.registerTemplates();
bundler.bundleJSDependancies();
webserver.startServer();


