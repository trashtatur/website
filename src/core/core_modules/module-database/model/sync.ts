import {dbReady, sequelize} from './connector';
import logger from 'cm/module-logger'

/**
 * Synchronize the database with the models
 * @param force     see Sequlize.sync
 * @returns {Promise}
 */
export async function dbSync(force) {
    if (!force) force = false;
    // noinspection BadExpressionStatementJS
    dbReady;

    try {
        const status = sequelize.sync({force});
        logger.info('Sequelize table creation succesful');
        return status;
    } catch (err) {
        logger.error('An error occurred while creating the table:'+ err);
        throw err;
    }
}