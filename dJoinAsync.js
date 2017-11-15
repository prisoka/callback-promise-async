const fs = require('fs');
const { promisify } = require('util');
const readFileAsync = promisify(fs.readFile);

const joiner = async () => {
    return Promise.resolve([]);
}

module.exports = joiner;