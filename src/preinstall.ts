let fs = require('fs');
let resolve = require('path').resolve;
let join = require('path').join;
let cp = require('child_process');
/**
 * @name Preinstall
 * @description Descends into submodules to execute npm install in them
 * @module helper
 * @devnotes
 */
// get module paths
let cM = resolve(__dirname, 'core/core_modules');
let venM = resolve(__dirname, 'ven/ven_modules');


//for core modules
fs.readdirSync(cM)
    .forEach(function (mod) {
        let modPath = join(cM, mod);

        // ensure path has package.json
        if (!fs.existsSync(join(modPath, 'package.json'))) {
            return;
        }

        // install folder
        cp.spawn('npm', ['install','--save'], { env: process.env, cwd: modPath, stdio: 'inherit' });
    });


//For outside modules
fs.readdirSync(venM)
    .forEach(function (mod) {
        let modPath = join(venM, mod);

        // ensure path has package.json
        if (!fs.existsSync(join(modPath, 'package.json'))) {
            return;
        }

        // install folder
        cp.spawn('npm', ['install','--save'], { env: process.env, cwd: modPath, stdio: 'inherit' });
    });

