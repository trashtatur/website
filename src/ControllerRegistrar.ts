import logger from './core/core_modules/module-logger';

let readdirp = require('readdirp');

let settings = {
    root: '.',
    entryType: 'files',
    fileFilter: ['*Action.ts', '*Actions.ts'],
    directoryFilter: ["!View", "!view", "!node_modules", "!Model", "!model", "!helper", "!Helper", "!templates"],
    depth: 5
};

export function registerControllers() {
    readdirp(settings,
        function (fileInfo) {
            let controllerPath = fileInfo.fullPath;
            try {
                if (fileInfo.name !== 'Action.ts') {
                    let controller = require(controllerPath).default;
                    new controller();
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