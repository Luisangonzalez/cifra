const crypto = require('crypto');
const fs = require('fs');

class Encrypt {
    constructor(name, password) {
        console.log(`Encrypt: ${name} with password ${password}, generate output ${name}.enc`);
        const cipher = crypto.createCipher('aes192', password);
        const input = fs.createReadStream(name);
        const output = fs.createWriteStream(`${name}.enc`);
        input.pipe(cipher).pipe(output);
    }

}

module.exports = Encrypt;