const fs = require('fs');
const { promisify } = require('util');
const readFileAsync = promisify(fs.readFile);

// Note the "async" keyword (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
const joiner = async () => {
    // You cannot use fs.readFileSync here
    // Use https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback
    // Use the `await` operator to avoid manually returning a promise (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
    return Promise.resolve([]);
};

module.exports = joiner;