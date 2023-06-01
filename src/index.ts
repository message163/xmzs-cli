#!/usr/bin/env node
import inquirer from 'inquirer'
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import {exec, execSync} from 'child_process'

import fs from 'fs'
const __dirname = dirname(fileURLToPath(import.meta.url));
const enum Type {
    domestic = '国内路线下载模板',
    international = '国际路线下载模板',
}
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
        choices: [Type.domestic, Type.international],
    },
]).then(answers => {
    //execSync(`mkdir ${answers.name}`)
    // execSync(`mkdir ${answers.name}`)
    
    // execSync(`cd ${answers.name}`)
    //let currentPath = process.cwd()
    let gitUrl = Type.domestic === answers.url ? 'https://gitee.com/chinafaker/nuxt-demo.git' : 'https://github.com/message163/nuxt-template.git'
    execSync(`git clone -b main ${gitUrl} ${answers.name}`)
    execSync(`cd ${answers.name} && rd /S/Q .git`)
})