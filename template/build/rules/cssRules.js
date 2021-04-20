const {resolve}=require('../utils.js')
const MiniCssExtractPlugin=require('mini-css-extract-plugin')
const rules=[
    {
      test: /\.scss?$/,
      include:resolve('src'),
      use:[
         MiniCssExtractPlugin.loader,
          {
            loader:'cache-loader',
            options:{
               cacheDirectory:resolve('.cache-loader')
            }
          },
          'css-loader',
            //   {
            //   loader: "@teamsupercell/typings-for-css-modules-loader",
            //   options: {
            //     eol: "\r\n"
            //   }
            // },
            // {
            //   loader: "css-loader",
            //   options: { modules: true }
            // },
            {
              loader: 'sass-loader',
              options:{
                sassOptions:{
                  includePaths:[
                    resolve('src/styles')
                 ]
                }
              }
            }
         
      ]
    
  }
]
module.exports=rules