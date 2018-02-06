const crypto = require('crypto');
const fs = require('fs');

class Decrypt {
    constructor(name, password) {
        console.log(`Decrypt: ${name} with password ${password}, generate output ${name}.dec`);
        const decipher = crypto.createDecipher('aes192', password);
        const input = fs.createReadStream(name);
        const output = fs.createWriteStream(`${name}.dec`);
        input.pipe(decipher).pipe(output);
    }

}

module.exports = Decrypt;