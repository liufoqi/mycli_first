const {resolve}=require('../utils.js')
const rules=[
    {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use:[
            {
                loader:'awesome-typescript-loader',
                options:{
                  useCache:true,
                  cacheDirectory:resolve('.cache-loader'),
                  babelOptions:{
                      babelrc:true,
                      plugins:[
                        'react-hot-loader/babel'
                      ]
                  }
                }
            }
        ]
    }
]
module.exports=rules