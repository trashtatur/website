/**
 * This module exports a Promise-function that loads all models into sequlize and then syncs them to the DB
 * Once that's done the promise get's resolved.
 */

import {dbReady, sequelize} from './connector';
import ArticlesModel from './schemas/ArticlesModel'
import UserModel from './schemas/UserModel'




/**
 * Synchronize the database with the models
 * @param force     see Sequlize.sync
 * @returns {Promise}
 */
export async function dbSync(force) {
    if (!force) force = false;
    dbReady;

    try {
        const status = sequelize.sync({force});
        console.log('It worked!');
        return status;
    } catch (err) {
        console.error('An error occurred while creating the table:', err);
        throw err;
    }
}