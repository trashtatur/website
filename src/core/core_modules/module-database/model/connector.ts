import {Sequelize} from 'sequelize-typescript';
import {DataSupplier} from "./DataSupplier";
import logger from '../../module-logger';

/**
 * @name connector
 * @description Connects sequelize instance to the database and provices logical models to sequelize
 * @module module-database
 * @devnotes
 */
let dataSupplier = new DataSupplier();

/**
 * This connects to the database
 * @type {Sequelize} : An ORM thing to interact with thse database
 */

// Please mind that the database needs to actually exist first!
export const sequelize = new Sequelize({
    database: dataSupplier.getDatabaseName(),
    username: dataSupplier.getDatabaseUser(),
    password: dataSupplier.getDatabasePassword(),
    host: dataSupplier.getDatabaseHost(),
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