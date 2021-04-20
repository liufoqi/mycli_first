const {resolve}=require('../utils.js')
const rules=[
    {
      test: /\.svg?$/,
      include:resolve('src'),
      use:[
            {
              loader: '@svgr/webpack',
              options:{
                
              }
            }
         
      ]
    
  }
]
module.exports=rules