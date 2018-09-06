import logger from './core/core_modules/module-logger';

/**
 * @author 
 * 
 * @description
 * @version Erstellungsdatum
 * @version Datum der neusten Änderung
 *          Beschreibung der Änderung
 * 
*/
let readdirp = require('readdirp');

let settings = {
    root: '.',
    entryType: 'files',
    fileFilter: ['*Action.js', '*Actions.js'],
    directoryFilter: ["!View", "!view", "!node_modules", "!Model", "!model",],
    depth: 5
};

////////////////////////////////////////// exports

/**
 * @author 
 * 
 * @description
 * @version Erstellungsdatum
 * @version Datum der neusten Änderung
 *          Beschreibung der Änderung
 * 
*/
export function registerControllers() {
    readdirp(settings,
        function (fileInfo) {
            let controllerPath = fileInfo.fullPath;
            try {
                if (fileInfo.name !== 'Action.js') {
                    let controller = require(controllerPath).default;
                    new controller(fileInfo.parentDir);
                    logger.debug("Added Controller: " + controllerPath)
                }
            } catch (err) {
                logger.error("Problem adding Controller: " + controllerPath + "\n" + err)
            }
        },
        function (err, res) {
            if (err) {
                logger.error("An error occured: " + err)
            }
        });
}
