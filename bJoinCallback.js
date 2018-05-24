const fs = require('fs');

const joiner = (cb) => {
  fs.readFile('users.json', (readUserErr, userString)=>{
    const users = JSON.parse(userString);
    fs.readFile('books.json', (readBookErr, bookString)=>{
      const books = JSON.parse(bookString);
      fs.readFile('reviews.json', (readReviewErr, reviewString)=>{
        const reviews = JSON.parse(reviewString);
        let output = [];
        for ( let singleReview of reviews ) {
          for ( let singleBook of books ) {
            if ( singleBook.id !== singleReview.bookId ) {
              continue;
            }
            for ( let singleUser of users ) {
              if ( singleUser.id !== singleReview.userId) {
                continue;
              }
              let joined = {
                "name":   singleUser.firstName,
                "book":   singleBook.title,
                "rating": singleReview.stars,
                "review": singleReview.text
              }
              output.push(joined);
            }
          }
        }
        cb(output);
      })
    })
  })
};

module.exports = joiner;
