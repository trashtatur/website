import {Sequelize} from 'sequelize-typescript';
var config = require('./modelConfig.json');
import logger from '../../module-logger';

/**
 * This connects to the database
 * @type {Sequelize} : An ORM thing to interact with thse database
 */

// Please mind that the database needs to actually exist first!
export const sequelize = new Sequelize({
    database: config.dbName,
    username: config.dbUser,
    password: config.dbPassword,
    host: config.host,
    dialect: 'mysql',
    logging: (msg) => logger.data(msg),
    modelPaths:[__dirname + '/schemas']
});


export const dbReady = sequelize.authenticate()
.then(function(err) {
        logger.info('Connection to database has been established successfully.');
    }, function (err) {
        logger.error('Unable to connect to the database:'+ err);
    });