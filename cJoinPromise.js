const fs = require('fs');
const { promisify } = require('util');
const readFileAsync = promisify(fs.readFile);

const joiner = () => {
  let users;
  let books;
  let reviews;

  return readFileAsync('users.json')
    .then((userString)=>{
      users = JSON.parse(userString);
      return readFileAsync('books.json');
    }).then((bookString)=>{
      books = JSON.parse(bookString)
      return readFileAsync('reviews.json')
    }).then((reviewString)=>{
      reviews = JSON.parse(reviewString);
      let output = [];

      for ( let singleReview of reviews ) {
        for ( let singleBook of books ) {
          for ( let singleUser of users ) {

            //match review foreign keys with both user && book foreign keys
            if ( singleReview.userId === singleUser.id &&
                 singleReview.bookId === singleBook.id )  {

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
    })
}

module.exports = joiner;
