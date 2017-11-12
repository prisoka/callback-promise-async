const fs = require('fs');
const expect = require('chai').expect;
const joiner = require('./bJoinCallback');

describe('joiner', () => {
    it('should join files', (done) => {
        const expected = JSON.parse(fs.readFileSync('expected.json'));
        joiner((actual) => {
            expect(expected).to.deep.equal(actual);
            done();
        });
    })
})