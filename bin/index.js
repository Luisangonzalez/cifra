#!/usr/bin/env node

const program = require('commander');
const Encrypt = require('../lib/encrypt');
const Decrypt = require('../lib/decrypt');


program
    .version('0.0.1')
    .description('Encript and decript files with node');

program
    .command('encript <file> <password> [algorithm]')
    .alias('e')
    .description('Encript file')
    .action((file, password, algorithm) => {
        let encrypt = new Encrypt(file, password, algorithm);
    });

program
    .command('decrypt <file> <password> [algorithm]d')
    .alias('d')
    .description('Decript filet')
    .action((file, password, algorithm) => {
        let decript = new Decrypt(file, password, algorithm);
    });   

    program.parse(process.argv);