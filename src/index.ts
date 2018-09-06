import {webserver} from './core/core_modules/module-webserver';
let database =  require('./core/core_modules/module-database');
let controllerRegistrar = require('./ControllerRegistrar');
let staticRegistrar = require('./StaticsRegistrar');
let bundler = require('./bundler');
/**
 * @author 
 * 
 * @description
 * @version Erstellungsdatum
 * @version Datum der neusten Änderung
 *          Beschreibung der Änderung
 * 
*/
controllerRegistrar.registerControllers();
staticRegistrar.registerTemplates();
bundler.bundleJSDependancies();
webserver.startServer();



