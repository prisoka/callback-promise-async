const fs = require('fs');
const { promisify } = require('util');
const readFileAsync = promisify(fs.readFile);

let users, books, reviews;
const joiner = () => {
    return readFileAsync('users.json')
        .then((userString) => {
            users = JSON.parse(userString);
            return readFileAsync('books.json');
        }).then((bookString) => {
            books = JSON.parse(bookString);
            return readFileAsync('reviews.json');
        }).then((reviewString) => {
            reviews = JSON.parse(reviewString);
            const output = [];
            for (let review of reviews) {
                for (let book of books) {
                    if (book.id !== review.bookId) {
                        continue;
                    }
                    for (let user of users) {
                        if (user.id !== review.userId) {
                            continue;
                        }
                        const joined = {
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
        })
}

module.exports = joiner;