import colors from 'colors';

export default class Logger {

    /**
     *
     * @param {string} message
     * @param {string} funName
     */
    static formatMessage(message,funName) {
        let timestamp = new Date().toLocaleString("de-DE", {hour12: false});
        return '['+timestamp+']['+funName+'] : '+message;

    }

    /**
     * @param message Message to send
     */
    static verbose(message) {
        console.log(this.formatMessage(message,'VERBOSE').blue);
    }

    /**
     * @param message Message to send
     */
    static error(message) {
        console.log(this.formatMessage(message,'ERROR').red);
    }

    /**
     * @param message Message to send
     */
    static debug(message) {
        console.log(this.formatMessage(message,'DEBUG').yellow);
    }

    /**
     * @param message Message to send
     */
    static warn(message) {
        console.log(this.formatMessage(message,'WARNING').cyan);
    }

    /**
     * @param message Message to send
     */
    static data(message) {
        console.log(this.formatMessage(message,'DATA').magenta);
    }

    /**
     * @param message Message to send
     */
    static info(message) {
        console.log(this.formatMessage(message,'INFO').green);
    }

    /**
     * @param message Message to send
     */
    static silly(message) {
        console.log(this.formatMessage(message,'SILLY').rainbow);
    }

    /**
     *
     * @param {string} message
     * @param {string} category custom category to send message in
     */
    static custom(message,category) {
        switch (category){
            case 'debug':
                this.debug(message);
                break;
            case 'verbose':
                this.verbose(message);
                break;
            case 'error':
                this.error(message);
                break;
            case 'silly':
                this.silly(message);
                break;
            case 'warn':
                this.warn(message);
                break;
            case 'data':
                this.data(message);
                break;
            case 'info':
                this.info(message);
                break;
            default:
                console.log(this.formatMessage(message,category).grey);
                break;
        }
    }

}
