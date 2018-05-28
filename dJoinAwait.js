const fs = require('fs');
const { promisify } = require('util');
const readFileAsync = promisify(fs.readFile);

// Note the "async" keyword (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
const joiner = async () => {
  // You cannot use fs.readFileSync here
      // Use https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback
      // Use the `await` operator to avoid manually returning a promise (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)

  let output = [];

  const users = JSON.parse(await readFileAsync('users.json'));
  const books = JSON.parse(await readFileAsync('books.json'));
  const reviews = JSON.parse(await readFileAsync('reviews.json'));

  for (let singleReview of reviews) {
    for (let singleBook of books) {
      for (let singleUser of users) {
        if (singleReview.userId === singleUser.id &&
             singleReview.bookId === singleBook.id) {
          let joined = {
            "name":singleUser.firstName,
            "book":singleBook.title,
            "rating":singleReview.stars,
            "review":singleReview.text
          }
          output.push(joined);
        }
      }
    }
  }

  return output;
};


module.exports = joiner;
