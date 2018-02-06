#!/usr/bin/env node

const program = require('commander');
const Encrypt = require('../lib/encrypt');
const Decrypt = require('../lib/decrypt');



program
    .version('0.0.1')
    .description('Encript and decript files with node');

program
    .command('encript file password')
    .alias('e')
    .description('Encript file')
    .action((file, password) => {
        let encrypt = new Encrypt(file, password);
    });

program
    .command('decrypt file password')
    .alias('d')
    .description('Decript filet')
    .action((file, password) => {
        let decript = new Decrypt(file, password);
    });   

    program.parse(process.argv);