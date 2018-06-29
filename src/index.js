import webserverHelper from 'cm/module-webserver';
import index from 'cm/module-database';
import controllerRegistrar from './ControllerRegistrar'
let  webserver = webserverHelper.provide();



webserver.startServer();