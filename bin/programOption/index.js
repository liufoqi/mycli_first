var program = require('commander');
var inquirer = require('inquirer');
const question=require('./question')
const {blue,red,green,yellow} =require('./consoleColors')
const create=require('../../src/create')
const exec=require('../../src/cmd/exec.js')
const start=require('../../src/start/start')
var process = require('child_process');
var shell = require('shelljs');
const programOptionSet=function(){
        program.version('0.0.1').parse(process.argv)
        program.option('-d, --debug', 'output extra debugging').parse(process.argv)
        program.option('-s, --small', 'small pizza size').parse(process.argv)
        /* mycli create 创建项目 */
        program
            .command('create')
            .description('create a project ')
            .action(function(e){
                console.log(e.args,'e.args')
                const workSpace=e.args[0]||'rtscli'
                green('欢迎使用mycli')
                green('当前工作目录为：'+workSpace)
                inquirer.prompt(question).then(answer=>{
                    answer.conf?green('创建新的项目'):red('放弃创建')
                    green('项目名称:'+answer.name)
                    green('项目作者:'+answer.author)
                    green('公共状态管理库:'+answer.state)
                    create({
                        name:workSpace,
                        author:answer.author||'author'
                    })
                })
            })
        
        /* mycli start 运行项目 */
        program
        .command('start')
         .description('start a project')
         .action(function(){
            green('--------运行项目-------')
            // startProject()
            start('start').then(()=>{
                green('-------✅  ✅运行完成-------')
            })
         })
        /* mycli build 打包项目 */
        program
        .command('build')
        .description('build a project')
        .action(function(){
            // start('build').then(()=>{
            //     green('-------✅  ✅构建完成-------')
            // })
            // exec().then(res=>{
            //     // console.log(res)
            // })
        })
        program.parse(process.argv)
        if( program.debug ){
            blue('option is debug')
        }else if(program.small){
            blue('option is small')
        }
}
module.exports=programOptionSet
