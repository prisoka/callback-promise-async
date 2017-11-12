const fs = require('fs');

const joiner = (cb) => {
    fs.readFile('users.json', (err, userString) => {
        const users = JSON.parse(userString);
        fs.readFile('books.json', (err, bookString) => {
            const books = JSON.parse(bookString);
            fs.readFile('reviews.json', (err, reviewString) => {
                const reviews = JSON.parse(reviewString);
                const output = [];
                for(let review of reviews) {
                    for(let book of books) {
                        if(book.id !== review.bookId) {
                            continue;
                        }
                        for(let user of users) {
                            if(user.id !== review.userId) {
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
                cb(output);
            })
        })
    })
}

module.exports = joiner;