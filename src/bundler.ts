import logger from "./core/core_modules/module-logger";

const browserify = require('browserify');
const fs = require('fs');
const readdirp = require('readdirp');
const path = require('path');

/**
 * @author 
 * 
 * @description
 * @version Erstellungsdatum
 * @version Datum der neusten Änderung
 *          Beschreibung der Änderung
 * 
*/

let settings = {
    root: "./build",
    entryType: "files",
    fileFilter: "*.js",
    directoryFilter: ["!Controller", "!controller", "!node_modules", "!Model", "!model"],
    depth: 6
};

/**
 * @author 
 * 
 * @description
 * @version Erstellungsdatum
 * @version Datum der neusten Änderung
 *          Beschreibung der Änderung
 * 
*/
export function bundleJSDependancies() {
    readdirp(settings,
        function (fileInfo) {
            let frontfilePath = fileInfo.fullPath;
            if (frontfilePath.includes("/frontend/") && !fileInfo.name.includes('bundled-')) {
                let pathSplit = frontfilePath.split(path.sep);
                let fileName = pathSplit.pop();
                let fileNameBundled = path.sep+"bundled-"+fileName;
                let fullPathBundled = pathSplit.join(path.sep)+fileNameBundled;
                browserify()
                    .add(frontfilePath)
                    .bundle()
                    .pipe(fs.createWriteStream(fullPathBundled));
            }
        },
        function (err, res) {
            if (err) {
                logger.error("An error occured: " + err)
            }
        });
}


