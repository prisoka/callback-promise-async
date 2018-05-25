const fs = require('fs');

const joiner = () => {
    const users = JSON.parse(fs.readFileSync('users.json'));
    const books = JSON.parse(fs.readFileSync('books.json'));
    const reviews = JSON.parse(fs.readFileSync('reviews.json'));
    // console.log('these are all USERS info >', users)
    // console.log('these are all BOOKS info >>', books)
    // console.log('these are all REVIEWS info >>>', reviews)
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

    return output;
}

module.exports = joiner;
