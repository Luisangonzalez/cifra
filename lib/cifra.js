const Encrypt = require('encrypt');
const Decrypt = require('decrypt');

class Cifra {};

Cifra.Encrypt = Encrypt;
Cifra.Decrypt = Decrypt;

module.exports = Cifra;