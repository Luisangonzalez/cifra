const crypto = require('crypto');
const fs = require('fs');

class Encrypt {
    constructor(file, password, algorithm='aes192') {
        console.log(`Encrypt: ${file} with password ${password}, generate output ${file}.enc`);
        const cipher = crypto.createCipher(algorithm, password);
        const input = fs.createReadStream(file);
        const output = fs.createWriteStream(`${file}.enc`);
        input.pipe(cipher).pipe(output);
    }

}

module.exports = Encrypt;