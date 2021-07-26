// const assertArraysEqual = require('./assertArraysEqual');

const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

module.exports = map
// const results1 = map(words, word => word[0]);
// console.log(results1)

// const alpha = ['apple','banana','carrot', 'date', 'eggfruit']
// const beta = ['Anthony','Bob','Cam']
// const c = ['Bnthony','Bob','Cam']

// assertArraysEqual(map(alpha, word => word[0]),['a','b','c','d','e'])
// assertArraysEqual(map(beta, word => word[0]),['A','B','C'])
// assertArraysEqual(map(c, word => word[0]),['A','B','C'])