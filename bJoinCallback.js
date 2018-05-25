const fs = require('fs');

const joiner = (cb) => {
  // You cannot use fs.readFileSync here
  // Use https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback

  fs.readFile('users.json', (err, data) => {
    if (err) throw err;
    let users = JSON.parse(data)

    fs.readFile('books.json', (err, data) => {
      if (err) throw err;
      let books = JSON.parse(data)

      fs.readFile('reviews.json', (err, data) => {
        if (err) throw err;
        let reviews = JSON.parse(data)

        let output = [];

        for(let review of reviews) {
          for(let book of books) {
            if(book.id !== review.bookId) {
                continue;
            }
            for(let user of users) {
              if(user.id !== review.userId) {
                  continue;
              }
              let joined = {
                  "name": user.firstName,
                  "book": book.title,
                  "rating": review.stars,
                  "review": review.text
              }
              output.push(joined);
            }
          }
        }

        cb(output)
      });
    });
  });


};

module.exports = joiner;
