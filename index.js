#!/usr/bin/env node
'use strict';

const program = require('commander');
const { encryptString, decryptString } = require('./translator');

program
    .command('encrypt <keyword> <phrase>')
    .alias('e')
    .description('Encrypt a string based on a keyword')
    .action((keyword, phrase) => encryptString(keyword, phrase));

program
    .command('decrypt <keyword> <phrase>')
    .alias('d')
    .description('Decrypt a string based on a keyword')
    .action((keyword, phrase) => decryptString(keyword, phrase));

program.parse(process.argv);