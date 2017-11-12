const fs = require('fs');
const expect = require('chai').expect;
const joiner = require('./dJoinAsync');

describe('joiner', () => {
    it('should Promise to join files', async () => {
        const expected = JSON.parse(fs.readFileSync('expected.json'));
        const actual = await joiner();
        expect(expected).to.deep.equal(actual);
    })
})