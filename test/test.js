const assert = require('assert');
const Encrypt = require('../lib/encrypt');
const Decrypt = require('../lib/decrypt');
const fs = require('fs');

let password;

before(() => {
    password = Math.random().toString();
});

describe('Encrypt()', function () {
    it('should encrypt files and generate .dec file ', function () {
        let encrypt = new Encrypt(`${__dirname}/text`, password);
        assert.equal(fs.existsSync(`${__dirname}/text.enc`), true);
    });
});

describe('Decrypt()', function () {
    it('should decrypt files and generate enc.dec file ', function () {
        let decrypt = new Decrypt(`${__dirname}/text.enc`, password);
        assert.equal(fs.existsSync(`${__dirname}/text.enc.dec`), true);
    });
});

describe('Check content file', function () {
    let originalFile = fs.readFileSync(`${__dirname}/text`, { encoding: 'utf8' });

    it('should not be equal original content VS encrypt content ', function () {
        let encryptFile = fs.readFileSync(`${__dirname}/text.enc`, { encoding: 'utf8' });
        assert.notEqual(originalFile, encryptFile);
    });

    it('should be equal original content VS decrypt content ', function () {
        let decryptFile = fs.readFileSync(`${__dirname}/text.enc.dec`, { encoding: 'utf8' });
        assert.equal(originalFile, decryptFile);
    });
});



after(() => {
    console.log('Final');
    if(fs.existsSync(`${__dirname}t/text.enc`)) fs.unlinkSync(`${__dirname}/text.enc`);
    if(fs.existsSync(`${__dirname}/text.enc.dec`)) fs.unlinkSync(`${__dirname}/text.enc.dec`);
 
});