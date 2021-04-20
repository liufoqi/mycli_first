"use strict";



module.exports = function exec() {

    return new Promise(function(resolve, reject) {
        var cmd = "cd rtscli";
        var exec = require("child_process").exec;
        exec(cmd,{
            maxBuffer: 1024 * 2000,
            // stdio: 'inherit'
        }, function(err, stdout, stderr) {
            if (err) {
                console.log(err);
                reject(err);
            } else if (stderr.lenght > 0) {
                reject(new Error(stderr.toString()));
            } else {
                console.log(stdout);
                resolve();
            }
        });
    });
};