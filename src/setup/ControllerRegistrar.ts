import logger from '../core_modules/module-logger';

/**
 * @name Controller Registrar
 * @description Registers Controllers to the express server so that routes are recognized
 * @module helper
 * @devnotes
 */
let readdirp = require('readdirp');

let settings = {
    root: '.',
    entryType: 'files',
    fileFilter: ['*Action.js', '*Actions.js'],
    directoryFilter: ["!View", "!view", "!node_modules", "!Model", "!model",],
    depth: 5
};

export function registerControllers() {
    readdirp(settings,
        function (fileInfo) {
            let controllerPath = fileInfo.fullPath;
            try {
                let controller = require(controllerPath).default;
                new controller(fileInfo.parentDir);
                logger.debug("Added Controller: " + controllerPath)
            } catch (err) {
                if (!(err instanceof TypeError)) {
                    logger.error("Problem adding Controller: " + controllerPath + "\n" + err)
                }
            }
        },
        function (err, res) {
            if (err) {
                logger.error("An error occured during Controller building: " + err)
            }
        });
}