var config = require('../../../../../modelConfig.json');
/**
 * @author 
 * 
 * @description
 * @version Erstellungsdatum
 * @version Datum der neusten Änderung
 *          Beschreibung der Änderung
 * 
*/
export class DataSupplier {

    //////////////////////////////// instance variables
    private readonly databaseHost:string;
    private readonly databaseName:string;
    private readonly databasePassword:string;
    private readonly databaseUser:string;
///////////////////////////////////////////////// constructor
    /**
 * @author 
 * 
 * @description
 * @version Erstellungsdatum
 * @version Datum der neusten Änderung
 *          Beschreibung der Änderung
 * 
*/
    constructor() {
        this.databaseHost = process.env.WEBSITE_DB_HOST ? process.env.WEBSITE_DB_HOST : config.host;
        this.databaseName = process.env.WEBSITE_DB_NAME ? process.env.WEBSITE_DB_NAME : config.dbName;
        this.databasePassword = process.env.WEBSITE_DB_PASSWORD ? process.env.WEBSITE_DB_PASSWORD : config.dbPassword;
        this.databaseUser = process.env.WEBSITE_DB_USER ? process.env.WEBSITE_DB_USER : config.dbUser;
    }

    ///////////////////////////////////////// getter and setter
    
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
