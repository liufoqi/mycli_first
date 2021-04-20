import * as React from 'react'
// @log

const mixinComponent=(props:any)=>{
   return <div>{props.desc||'这是一个装饰器'}</div>
}
function log(target:any):any{
 console.log(target)
   return target
}
export default log(mixinComponent)