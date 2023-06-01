#!/usr/bin/env node
import inquirer from 'inquirer';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';
const __dirname = dirname(fileURLToPath(import.meta.url));
inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: '请输入文件夹的名称'
    },
    {
        type: 'list',
        name: 'url',
        message: '请选择您喜欢的颜色:',
        choices: ["\u56FD\u5185\u8DEF\u7EBF\u4E0B\u8F7D\u6A21\u677F" /* Type.domestic */, "\u56FD\u9645\u8DEF\u7EBF\u4E0B\u8F7D\u6A21\u677F" /* Type.international */],
    },
]).then(answers => {
    //execSync(`mkdir ${answers.name}`)
    // execSync(`mkdir ${answers.name}`)
    // execSync(`cd ${answers.name}`)
    //let currentPath = process.cwd()
    let gitUrl = "\u56FD\u5185\u8DEF\u7EBF\u4E0B\u8F7D\u6A21\u677F" /* Type.domestic */ === answers.url ? 'https://gitee.com/chinafaker/nuxt-demo.git' : 'https://github.com/message163/nuxt-template.git';
    execSync(`git clone -b main ${gitUrl} ${answers.name}`);
    execSync(`cd ${answers.name} && rd /S/Q .git`);
});
