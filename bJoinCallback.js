const fs = require('fs');

const joiner = (cb) => {
    // You cannot use fs.readFileSync here
    // Use https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback
    cb([]);
};

module.exports = joiner;