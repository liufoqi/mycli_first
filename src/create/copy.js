const {blue,red,green,yellow} =require('../../bin/programOption/consoleColors')
const fs =require('fs')
const npm=require('../start/index.js')
let fileCount = 0  /* 文件数量 */
let dirCount = 0   /* 文件夹数量 */
let flat = 0       /* readir数量 */
let isInstall = false
/**
 * 
 * @param {*} sourcePath  //template资源路径
 * @param {*} currentPath  //当前项目路径
 * @param {*} copyCallback  // 上面的 copy 函数
 * @param {*} cb    //项目复制完成回调函数 
 */
function dirExist(sourcePath,currentPath,copyCallback,cb){
    fs.exists(currentPath,(ext=>{
        if(ext){
            /* 递归调用copy函数 */
            copyCallback( sourcePath , currentPath,cb)
        }else {
            fs.mkdir(currentPath,()=>{
                fileCount--
                dirCount--
                copyCallback( sourcePath , currentPath,cb)
               yellow('创建文件夹：'+ currentPath )
                completeControl(cb)
            })
        }
    }))
}
function completeControl(cb){
    /* 三变量均为0，异步I/O执行完毕。 */
    green(flat,fileCount,dirCount)
    if(fileCount === 0 && dirCount ===0 && flat===0){
       green('------构建完成-------')
        if(cb && !isInstall ){
            isInstall = true
             blue('-----开始install-----')
            cb(()=>{
               blue('-----完成install-----')
                /* 判断是否存在webpack  */
                runProject()
            })
        }
    }
}
//运行项目
function runProject(){
    try{
        const doing = npm([ 'start' ])
        doing()
    }catch(e){
       red('自动启动失败，请手动npm start 启动项目')
    }
}
/**
 * 
 * @param {*} sourcePath   //template资源路径
 * @param {*} currentPath  //当前项目路径
 * @param {*} cb           //项目复制完成回调函数 
*/
 function copy (sourcePath,currentPath,cb){
    flat++
    /* 读取文件夹下面的文件 */
    fs.readdir(sourcePath,(err,paths)=>{
        flat--
        if(err){
            throw err
        }
        paths.forEach(path=>{
            if(path !== '.git' && path !=='package.json' ) fileCount++
            const  newSoucePath = sourcePath + '/' + path
            const  newCurrentPath = currentPath + '/' + path
            /* 判断文件信息 */
            fs.stat(newSoucePath,(err,stat)=>{
                if(err){
                    throw err
                }
                /* 判断是文件，且不是 package.json  */
                if(stat.isFile() && path !=='package.json' ){
                    /* 创建读写流 */
                    const readSteam = fs.createReadStream(newSoucePath)
                    const writeSteam = fs.createWriteStream(newCurrentPath)
                    readSteam.pipe(writeSteam)
                   green( '创建文件：'+ newCurrentPath  )
                    fileCount--
                    completeControl(cb)
                /* 判断是文件夹，对文件夹单独进行 dirExist 操作 */    
                }else if(stat.isDirectory()){
                    if(path!=='.git' && path !=='package.json' ){
                        dirCount++
                        dirExist( newSoucePath , newCurrentPath ,copy,cb)
                    }
                }
            })
        })
    })
}
module.exports=copy


