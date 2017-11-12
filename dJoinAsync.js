const fs = require('fs');
const { promisify } = require('util');
const readFileAsync = promisify(fs.readFile);

const joiner = async () => {
    const users = JSON.parse(await readFileAsync('users.json'));
    const books = JSON.parse(await readFileAsync('books.json'));
    const reviews = JSON.parse(await readFileAsync('reviews.json'));
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
}

module.exports = joiner;