const revisePackageJson=require('./revisePackageJson')
const copy=require('./copy')
const npm=require('../start/index.js')
const {blue,red,green,yellow} =require('../../bin/programOption/consoleColors')
module.exports = function(res){
    /* 创建文件 */
    green('------开始构建-------')
    /* 找到template文件夹下的模版项目 */
    const sourcePath = __dirname.slice(0,-6)+'../template'
    /* 修改package.json*/
    revisePackageJson( res ,sourcePath ).then(()=>{
        const {name}=res
        const path = process.cwd()+ '/'+name.trim()
        blue('当前路径:'+ path)
        copy( sourcePath , path ,npm([ 'install' ],name.trim()))
    })
}
