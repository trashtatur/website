import handlebars from 'handlebars';


export class Action {
    /**
     *
     * @param {string} file
     * @param {array|map} data
     * @returns {*} the rendered page
     */
    render(file,data) {
        let template = handlebars.compile(file);
        return template(data);
    }
}