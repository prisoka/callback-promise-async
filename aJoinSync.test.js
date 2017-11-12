const fs = require('fs');
const expect = require('chai').expect;
const joiner = require('./aJoinSync');

describe('joiner', () => {
    it('should join files', () => {
        const expected = JSON.parse(fs.readFileSync('expected.json'));
        const actual = joiner();
        expect(expected).to.deep.equal(actual);
    })
})