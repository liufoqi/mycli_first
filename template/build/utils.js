const path =require('path')
exports.resolve=function(filePath){
    return path.join(__dirname,'./../',filePath)
}
exports.resolveFile=function (dir){
    return path.join(dir)
}