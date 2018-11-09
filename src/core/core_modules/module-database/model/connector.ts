import {Sequelize} from 'sequelize-typescript';
import {DataSupplier} from "./DataSupplier";
import logger from '../../module-logger';

/**
 * @name connector
 * @description Connects sequelize instance to the database and provices logical models to sequelize
 * @module module-database
 * @devnotes
 */
export class DatabaseConnector {

    private dataSupplier: DataSupplier;
    private dataBaseModelFolders:Array<string>;
    private sequelizeInstance:Sequelize;


    constructor(models:Array<string>) {
        this.dataSupplier = new DataSupplier();
        this.dataBaseModelFolders = models;
    }


    async initDatabase() {
        this.sequelizeInstance = new Sequelize({
            database: this.dataSupplier.getDatabaseName(),
            username: this.dataSupplier.getDatabaseUser(),
            password: this.dataSupplier.getDatabasePassword(),
            host: this.dataSupplier.getDatabaseHost(),
            dialect: 'mysql',
            logging: (msg) => logger.data(msg),
            modelPaths:this.dataBaseModelFolders
        });
    }

    async authenticateDB() {
        await this.initDatabase();

        this.sequelizeInstance.authenticate()
            .then(function(err) {
                logger.info('Connection to database has been established successfully.');
            }, function (err) {
                logger.error('Unable to connect to the database:'+ err);
            });
    }

    public getInstance() {
        return this.sequelizeInstance;
    }
}