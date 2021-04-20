
module.exports = function spawn(cmdString,arg) {
    return new Promise(function(resolve, reject) {
        var cmd = cmdString||"ipconfig";
        var spawn = require("child_process").spawn;
        var args=arg||[]
        var result = spawn(cmd,args,{
            stdio: 'inherit'
          });

        result.on('close', function(code) {
            console.log('child process exited with code :' + code);
        });
        // result.stdout.on('data', function(data) {
        //     console.log('stdout: ' + data);
        // });
        // result.stderr.on('data', function(data) {
        //     console.log('stderr: ' + data);
        //     reject(new Error(stderr.toString()));
        // });
        resolve();

    });
};