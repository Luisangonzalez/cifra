#!/usr/bin/env node

const program = require('commander');
const Encrypt = require('../lib/encrypt');
const Decrypt = require('../lib/decrypt');


program
    .version('0.0.1')
    .description('Encrypt and decrypt files with node');

program
    .command('Encrypt <file> <password> [algorithm]')
    .alias('e')
    .description('Encript file')
    .action((file, password, algorithm) => {
        let encrypt = new Encrypt(file, password, algorithm);
    });

program
    .command('Decrypt <file> <password> [algorithm]')
    .alias('d')
    .description('Decrypt file')
    .action((file, password, algorithm) => {
        let decrypt = new Decrypt(file, password, algorithm);
    });   

    program.parse(process.argv);