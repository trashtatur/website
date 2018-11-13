import logger from "../core_modules/module-logger";
let readdirp = require('readdirp');
import {dbSync} from "../core_modules/module-database/model/sync";

/**
 * @name Database Configurator
 * @description Finds and registers Model paths and syncs Sequelize with them and starts the DB background
 * @module helper
 * @devnotes
 */
let settingsModels = {
    root: './build',
    entryType: 'directories',
    directoryFilter:["!Controller","!controller","!node_modules","!frontend"],
    depth: 5
};

let databaseModels = [];

/**
 * Function collects model files and starts DB
 */
function initializeDB() {
    readdirp(settingsModels,
        function (dirInfo) {
            if (dirInfo.name.includes('schemas')){
                logger.debug('Added Model Directory: '+dirInfo.fullPath);
                databaseModels.push(dirInfo.fullPath);
            }
        },
        function (err, res) {
            if (err) {
                logger.error("An error occured: " + err)
            }
            if (res) {
                dbSync(true,databaseModels)
            }
        });
}

export {initializeDB}