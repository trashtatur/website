import Sequelize from 'sequelize';
import fileConfig from './modelConfig.json'
import loggerHelper from 'cm/module-logger'
const logger = loggerHelper.provide();

/**
 * This connects to the database
 * @type {Sequelize} : An ORM thing to interact with thse database
 */

 // config
 export const config = fileConfig;
 export const testString = 'test';


// Please mind that the database needs to actually exist first!
export const sequelize = new Sequelize(config.dbName, config.dbUser, config.dbPassword,{
    host: config.host,
    dialect:'mysql'
});

export const dbReady = sequelize.authenticate()
    .then(function(err) {
        logger.info('Connection has been established successfully.');
    }, function (err) {
        logger.error('Unable to connect to the database:', err);
    });