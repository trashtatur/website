let colors = require('colors');

export default class Logger {

    /**
     *
     * @param {string} message
     * @param {string} funName
     */
     formatMessage(message,funName) {
        let timestamp = new Date().toLocaleString("de-DE", {hour12: false});
        return '['+timestamp+']['+funName+'] : '+message;

    }


    /**
     * @param message Message to send
     */
     verbose(message) {
        // @ts-ignore
        console.log(this.formatMessage(message,'VERBOSE').blue);
    }

    /**
     * @param message Message to send
     */
     error(message) {
        // @ts-ignore
        console.log(this.formatMessage(message,'ERROR').red);
    }

    /**
     * @param message Message to send
     */
     debug(message) {
        // @ts-ignore
        console.log(this.formatMessage(message,'DEBUG').yellow);
    }

    /**
     * @param message Message to send
     */
     warn(message) {
        // @ts-ignore
        console.log(this.formatMessage(message,'WARNING').cyan);
    }

    /**
     * @param message Message to send
     */
     data(message) {
        // @ts-ignore
        console.log(this.formatMessage(message,'DATA').magenta);
    }

    /**
     * @param message Message to send
     */
     info(message) {
        // @ts-ignore
        console.log(this.formatMessage(message,'INFO').green);
    }

    /**
     * @param message Message to send
     */
     silly(message) {
        // @ts-ignore
        console.log(this.formatMessage(message,'SILLY').rainbow);
    }

    /**
     *
     * @param {string} message
     * @param {string} category custom category to send message in
     */
     custom(message,category) {
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
                // @ts-ignore
                console.log(this.formatMessage(message,category).grey);
                break;
        }
    }

}
