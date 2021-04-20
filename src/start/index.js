const which = require('which')
/* 找到npm */
function findNpm() {
  var npms = process.platform === 'win32' ? ['npm.cmd'] : ['npm']
  for (var i = 0; i < npms.length; i++) {
    try {
      which.sync(npms[i])
      console.log('use npm: ' + npms[i])
      return npms[i]
    } catch (e) {
    }
  }
  throw new Error('please install npm')
}
/**
 * 
 * @param {*} cmd   
 * @param {*} args 
 * @param {*} fn 
 */
/* 运行终端命令 */ 
function runCmd(cwd,cmd, args, fn) {
    args = args || []
    console.log(cmd,'cmd')
    var runner = require('child_process').spawn(cmd, args, {
      cwd:`./${cwd}`,
      stdio: 'inherit'
    })
    runner.on('close', function (code) {
      console.log(code,'code')
      if (fn) {
        fn(code)
      }
    })
  }
  /**
 * 
 * @param {*} installArg  执行命令 命令行组成的数组，默认为 install 
 */
module.exports = function (installArg = [ 'install' ],name) {
    /* 通过第一步,闭包保存npm */  
    const npm = findNpm()
    return function (done){
      /* 执行命令 */  
      runCmd(name,which.sync(npm),installArg, function () {
          /* 执行成功回调 */
          done && done()
       })
    }
  }
  
  
