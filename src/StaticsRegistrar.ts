import logger from "./core/core_modules/module-logger";
import {webserver} from './core/core_modules/module-webserver';
let path = require('path');
let readdirp = require('readdirp');

let settingsTemplates = {
  root: './src/templates',
  entryType: 'directories',
  depth: 1
};

export function registerTemplates() {
    readdirp(settingsTemplates,
        function (dirInfo) {
            let dirPath = '/'+dirInfo.path;
            let fullPath = dirInfo.fullPath;
            let parentDir = dirInfo.parentDir;

            if (dirInfo.name.includes('css') || dirInfo.name.includes('js')) {
                webserver.addStaticRoute(dirPath,fullPath)
            }
    },
        function (err, res) {
            if (err) {
                logger.error("An error occured: " + err)
            }
        });
}
