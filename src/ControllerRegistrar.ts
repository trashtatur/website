import loggerHelper from 'cm/module-logger';
let readdirp = require('readdirp');
let logger = loggerHelper.provide();

let settings = {
    root: '.',
    entryType: 'files',
    fileFilter: ['*Action.ts','*Actions.ts'],
    directoryFilter: ["!View","!view","!node_modules","!Model","!model","!helper","!Helper","!templates"],
    depth: 5
};


readdirp(settings,
    function (fileInfo) {
        let controllerPath = fileInfo.fullPath;
        try {
            if (fileInfo.name !== 'Action.ts') {
                // @ts-ignore
                let controller = require(controllerPath).default;
                new controller();
                logger.debug("Added Controller: " + controllerPath)
            }
        } catch (err) {
            logger.error("Problem adding Controller: "+controllerPath +"\n"+err)
        }
    },
    function (err, res) {
        if(err) {
            logger.error("An error occured: "+err)
        }
    });