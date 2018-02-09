var assert = require('assert');
const Encrypt = require('../lib/encrypt');
const Decrypt = require('../lib/decrypt');


describe('Encrypt()', function () {
    it('should encrypt files ', function () {
        let encrypt = new Encrypt('test/text', 'manolo');
        // check if package.json.dec is created
    });
});

describe('Decrypt()', function () {
    it('should decrypt files ', function () {
        let decrypt = new Decrypt('test/text.enc', 'manolo');
        // check if package.json.dec is created
        // assert.equal('./text', './text.enc.dec');
    });
});