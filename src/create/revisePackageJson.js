const fs =require('fs')
const path = require('path');
const {blue,red,green,yellow} =require('../../bin/programOption/consoleColors')
module.exports=function revisePackageJson(res,sourcePath){
    return new Promise((resolve)=>{
      /* 读取文件 */
        fs.readFile(sourcePath+'/package.json',(err,data)=>{
            if(err) throw err
            const { author , name  } = res
            let json = data.toString()
            // console.log(json,'package.json')
            /* 替换模版 */
            json = json.replace(/demoName/g,name.trim())
            json = json.replace(/demoAuthor/g,author.trim())
            const path = process.cwd()+ '/'+name.trim()
            // console.log(Buffer.from(json))
            fs.mkdir(path,{recursive:true},(err)=>{
                if(err){
                    throw err;
                }else{
                  /* 写入文件 */
                  fs.writeFile(path+'/package.json', json ,(err)=>{
                if(err) throw err
                green( '创建文件：'+ path )
                resolve()
              })
              }
            });
         
        })
    })
}
