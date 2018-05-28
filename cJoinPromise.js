const fs = require('fs');
const { promisify } = require('util');
const readFileAsync = promisify(fs.readFile);

const joiner = () => {
    // You cannot use fs.readFileSync here
    // Use https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback
    // and return "a promise to join the files"
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

    let userPromise = new Promise((resolve, reject) => {
      fs.readFile('users.json', (err, data) => {
        if(err) {
          reject("FAILURE")
        }
        const users = await JSON.parse(data);
        resolve(users)
      })
    })

    let bookPromise = new Promise((resolve, reject) => {
      fs.readFile('books.json', (err, data) => {
        if(err) {
          reject("FAILURE")
        }
        const books = await JSON.parse(data);
        resolve(books)
      })
    })

    let reviewPromise = new Promise((resolve, reject) => {
      fs.readFile('reviews.json', (err, data) => {
        if(err) {
          reject("FAILURE")
        }
        const reviews = await JSON.parse(data);
        resolve(reviews)
      })
    })

  return await Promise.all([userPromise, bookPromise, reviewPromise]).then(function([users, books, reviews]) {
    let output = [];
    for(let review of reviews) {
      for(let book of books) {
        for(let user of users) {
          if(user.id !== review.userId || book.id !== review.bookId) {
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
   return output;
   });
}

module.exports = joiner;
