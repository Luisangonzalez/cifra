const crypto = require('crypto');
const fs = require('fs');

class Decrypt {
    constructor(file, password, algorithm='aes192') {
        console.log(`Decrypt: ${file} with password ${password}, generate output ${file}.dec`);
        const decipher = crypto.createDecipher(algorithm, password);
        const input = fs.createReadStream(file);
        const output = fs.createWriteStream(`${file}.dec`);
        input.pipe(decipher).pipe(output);
    }

}

module.exports = Decrypt;