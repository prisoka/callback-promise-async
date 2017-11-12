const fs = require('fs');
const expect = require('chai').expect;
const joiner = require('./cJoinPromise');

describe('joiner', () => {
    it('should Promise to join files', () => {
        const expected = JSON.parse(fs.readFileSync('expected.json'));
        return joiner().then((actual) => {
            expect(expected).to.deep.equal(actual);
        })
    })
})