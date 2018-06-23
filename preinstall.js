let fs = require('fs');
let resolve = require('path').resolve;
let join = require('path').join;
let cp = require('child_process');

// get module paths
let cM = resolve(__dirname, 'core/core_modules');
let venM = resolve(__dirname, 'ven/ven_modules');


//for core modules
fs.readdirSync(cM)
    .forEach(function (mod) {
        let modPath = join(cM, mod);

        // ensure path has package.json
        if (!fs.existsSync(join(modPath, 'package.json'))) return;

        // install folder
        cp.spawn('npm', ['install','--save'], { env: process.env, cwd: modPath, stdio: 'inherit' })
    });


//For outside modules
fs.readdirSync(venM)
    .forEach(function (mod) {
        let modPath = join(venM, mod);

        // ensure path has package.json
        if (!fs.existsSync(join(modPath, 'package.json'))) return;

        // install folder
        cp.spawn('npm', ['install','--save'], { env: process.env, cwd: modPath, stdio: 'inherit' })
    });


//Builds symlinks for module directories
let vendorModPath = "../ven/ven_modules";
let vendorLinkPath = "node_modules/vm";

fs.symlink(vendorModPath,vendorLinkPath,function () {
    fs.lstat(vendorLinkPath,function (err,stats) {
        if(stats.isSymbolicLink()) {
            fs.readlink(vendorLinkPath,function (err,linkstring) {
                console.log(linkstring);
                if (linkstring === vendorModPath) {
                    console.log("Succesfully established Link to vendor modules")
                } else {
                    console.error("Link to vendor modules was not established!!!")
                }
            })
        } else {
            console.error("Created file is no symbolic Link for vendor modules")
        }
    })
});

let coreModPath = "../core/core_modules";
let coreLinkPath = "node_modules/cm";


fs.symlink(coreModPath,coreLinkPath,function () {
    fs.lstat(coreLinkPath,function (err,stats) {
        if(stats.isSymbolicLink()) {
            fs.readlink(coreLinkPath,function (err,linkstring) {
                console.log(linkstring);
                if (linkstring ===coreModPath) {
                    console.log("Succesfully established Link to core modules")
                } else {
                    console.error("Link to core modules was not established!!!")
                }
            })
        } else {
            console.error("Created file is no symbolic Link for core modules")
        }
    })
});
