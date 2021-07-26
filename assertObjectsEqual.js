const eqObject = require('./eqObject');

const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;
  if (!eqObject(actual, expected)) {
    console.log(`🔴🔴🔴 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
  if (eqObject(actual, expected)) {
    console.log(`🟢🟢🟢 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  }
}

module.exports = assertObjectsEqual;

// assertObjectsEqual({ a: '1', b: 2 },{ b: 2, a: '1' });
// assertObjectsEqual({ a: '1', b: 2 },{ b: 3, a: '1' });