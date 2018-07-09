import logger from "./core/core_modules/module-logger";
import {webserver} from './core/core_modules/module-webserver';
let path = require('path');
let readdirp = require('readdirp');

let settingsTemplates = {
  root: './src',
  entryType: 'directories',
  directoryFilter:['!model',"!Model","!Controller","!controller","!node_modules"],
  depth: 5
};

export function registerTemplates() {
    readdirp(settingsTemplates,
        function (dirInfo) {
            if (dirInfo.name.includes('css') || dirInfo.name.includes('js')) {
                let dirPath = '/'+dirInfo.path;
                let fullPath = dirInfo.fullPath;
                let parentDir = dirInfo.parentDir.split(path.sep);
                parentDir.pop();
                let modulePath = "/"+parentDir.pop()+"/"+dirInfo.name;
                webserver.addStaticRoute(modulePath,fullPath)
            }
    },
        function (err, res) {
            if (err) {
                logger.error("An error occured: " + err)
            }
        });
}
