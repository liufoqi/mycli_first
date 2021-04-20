// const webpack =require('webpack')
const rules =require('./rules')
const plugins =require('./plugins')
const {resolve}=require('./utils.js')
const tsconfigPathsWebpackPlugin=require('tsconfig-paths-webpack-plugin')
module.exports={
    entry: { index: resolve('src/index.tsx') },
    output: {
        path:resolve('dist'),
        chunkFilename: 'js/[name].[chunkhash:8].js',
        filename:'js/[name].[chunkhash:8].js',
        // publicPath: '/public',
        // pathinfo: false
    },
    // optimization: {
      // splitChunks: {
      //     chunks: "all",
      //     maxSize:20000,
      //     cacheGroups: {
      //       defaultVendors: {
      //         test: /[\\/]node_modules[\\/]/,
      //         priority: -10,
      //         reuseExistingChunk: true,
      //       },
      //       default: {
      //         minChunks: 2,
      //         priority: -20,
      //         reuseExistingChunk: true,
      //       },
      //     },
      // }
  //  },
    resolve: {
        extensions:['.ts','.tsx','.jsx','.js'],
        plugins:[
          new tsconfigPathsWebpackPlugin(
            {
              configFile:resolve('tsconfig.json')
            }
           )
        ],
    },
    module: {
      rules:rules
    },
    plugins:plugins
}