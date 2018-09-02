var config = require('../../../../../modelConfig.json');

export class DataSupplier {

    private readonly databaseHost:string;
    private readonly databaseName:string;
    private readonly databasePassword:string;
    private readonly databaseUser:string;

    constructor() {
        this.databaseHost = process.env.WEBSITE_DB_HOST ? process.env.WEBSITE_DB_HOST : config.host;
        this.databaseName = process.env.WEBSITE_DB_NAME ? process.env.WEBSITE_DB_NAME : config.dbName;
        this.databasePassword = process.env.WEBSITE_DB_PASSWORD ? process.env.WEBSITE_DB_PASSWORD : config.dbPassword;
        this.databaseUser = process.env.WEBSITE_DB_USER ? process.env.WEBSITE_DB_USER : config.dbUser;
    }

    getDatabaseHost() {
        return this.databaseHost;
    }

    getDatabaseName() {
        return this.databaseName;
    }

    getDatabasePassword() {
        return this.databasePassword
    }

    getDatabaseUser() {
        return this.databaseUser
    }
}