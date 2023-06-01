#!/usr/bin/env node
import inquirer from 'inquirer';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';
import os from 'node:os';
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
        message: '请选择下载模板的路线',
        choices: ["\u56FD\u5185\u8DEF\u7EBF\u4E0B\u8F7D\u6A21\u677F" /* Type.domestic */, "\u56FD\u9645\u8DEF\u7EBF\u4E0B\u8F7D\u6A21\u677F" /* Type.international */],
    },
]).then(answers => {
    let gitUrl = "\u56FD\u5185\u8DEF\u7EBF\u4E0B\u8F7D\u6A21\u677F" /* Type.domestic */ === answers.url ? 'https://gitee.com/chinafaker/nuxt-demo.git' : 'https://github.com/message163/nuxt-template.git';
    execSync(`git clone -b main ${gitUrl} ${answers.name}`);
    switch (os.platform()) {
        case 'win32':
            execSync(`cd ${answers.name} && rd /S/Q .git`);
            break;
        default:
            execSync(`cd ${answers.name} && rm -rf .git`);
            break;
    }
});
