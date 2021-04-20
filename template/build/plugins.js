const {resolve,resolveFile}=require('./utils.js')
const HtmlWebpackPlugin =require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin=require('mini-css-extract-plugin')
const plugins=[
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin(
        {
            template:'./build/tpl/index.html'
        }
        ),
    new  MiniCssExtractPlugin({
        filename:resolveFile('css/[name].css')
    })
]
module.exports=plugins