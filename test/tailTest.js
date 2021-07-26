const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs'])
  })
  it("returns ['beep', 'boop', 'bop'] for ['Yo Yo', 'beep', 'boop', 'bop']", () => {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs'])
  })
})