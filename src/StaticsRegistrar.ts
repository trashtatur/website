import logger from "./core/core_modules/module-logger";
import {webserver} from './core/core_modules/module-webserver';
let path = require('path');
let readdirp = require('readdirp');

/**
 * @author 
 * 
 * @description
 * @version Erstellungsdatum
 * @version Datum der neusten Änderung
 *          Beschreibung der Änderung
 * 
*/

let settingsTemplates = {
  root: './build',
  entryType: 'directories',
  directoryFilter:['!model',"!Model","!Controller","!controller","!node_modules"],
  depth: 5
};
////////////////////////////////////////////////// export

/**
 * @author 
 * 
 * @description
 * @version Erstellungsdatum
 * @version Datum der neusten Änderung
 *          Beschreibung der Änderung
 * 
*/
export function registerTemplates() {
    readdirp(settingsTemplates,
        function (dirInfo) {
            if (dirInfo.name.includes('css') || dirInfo.name.includes('js')) {
                let fullPath = dirInfo.fullPath;
                let parentDir = dirInfo.parentDir.split(path.sep);
                parentDir.pop();
                let modulePath = path.sep+parentDir.pop()+path.sep+dirInfo.name;
                webserver.addStaticRoute(modulePath,fullPath)
            }
    },
        function (err, res) {
            if (err) {
                logger.error("An error occured: " + err)
            }
        });
}
