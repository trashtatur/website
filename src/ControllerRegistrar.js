import loggerHelper from 'cm/module-logger';
import readdirp from 'readdirp';
let fs = require('fs');
let resolve = require('path').resolve;
let join = require('path').join;
let cp = require('child_process');

let logger = loggerHelper.provide();

let cM = resolve(__dirname, 'core/core_modules');
let venM = resolve(__dirname, 'ven/ven_modules');

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
                let controller = require(controllerPath).default;
                new controller();
                logger.debug("Added Controller: " + controllerPath)
            }
        } catch (err) {
            logger.error("Problem adding Controller: "+controllerPath)
        }
    },
    function (err, res) {
        if(err) {
            logger.error("An error occured: "+err)
        }
    });