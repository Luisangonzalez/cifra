# Cifra

[![Build Status](https://travis-ci.org/Luisangonzalez/cifra.svg?branch=master)](https://travis-ci.org/Luisangonzalez/cifra)
[![Coverage Status](https://coveralls.io/repos/github/Luisangonzalez/cifra/badge.svg?branch=master)](https://coveralls.io/github/Luisangonzalez/cifra?branch=master)

## cli-tool to Encrypt and Decrypt files


### Install:

`npm install -g cifra`

### Use:

```bash
➜  ~ cifra -h

  Usage: cifra [options] [command]

  Encrypt and decrypt files with node


  Options:

    -V, --version  output the version number
    -h, --help     output usage information


  Commands:

    Encrypt|e <file> <password> [algorithm]   Encript file
    Decrypt|d <file> <password> [algorithm]  Decrypt file

```

* #### [algorithm] --> aes192 it is default algorithm.
On recent OpenSSL releases, openssl `list-cipher-algorithms` will display the available cipher algorithms.