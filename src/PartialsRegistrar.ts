let readdirp = require('readdirp');
let fs = require('fs');
import logger from './core/core_modules/module-logger'


let partialsPathSetting = {
  root:'./src',
  entryType: 'directories',
  directoryFilter: ['!model',"!Model","!Controller","!controller","!node_modules"],
  depth: 5
};
/**
 * @name Partials Registrar
 * @description Registers handlebars partials to the webservers templating engine
 * @module helper
 * @devnotes
 */
let partialDirs = [];
let addedPartials = [];

function registerPartials() {
    readdirp(partialsPathSetting,
        function (dirInfo) {
            if (dirInfo.name.includes('partials')) {
                fs.readdir(dirInfo.fullPath, (err,files) => {
                    files.forEach(file => {
                        if (addedPartials.indexOf(file) > -1) {
                            logger.warn("The Partial's name "+file+" in "+dirInfo.path+" is already reserved! This might produce unwanted results")
                        } else {
                            addedPartials.push(file)
                        }
                    })
                 });
                logger.debug('Added Partial Directory: '+dirInfo.path);
                partialDirs.push(dirInfo.fullPath);
            }
        },
        function (err,res) {
            if (err) {

            }
        })
}


export {registerPartials, partialDirs}