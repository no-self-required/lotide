// const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let x = 0; x < sentence.length; x++) {
    //loop through sentence 
    if (sentence[x] === ' ') {
      continue;
    }
    //check [x] !== space: do something, else: continue
    if (results[sentence[x]]) {
      results[sentence[x]].push(x);
    }
    else {
      results[sentence[x]] = [x];
    }
  }
  return results;
};

module.exports = letterPositions
// console.log(letterPositions("lighthouse in the house"))

// assertArraysEqual(letterPositions("hello").e, [1]);
// assertArraysEqual(letterPositions("hello").o, [4]);
// assertArraysEqual(letterPositions("lighthouse in the house").o, [6, 19]);


// if (results[x]) {
//   results[x].push(sentence.indexOf([sentence[x]]));
// }
// else {
//   results[sentence[x]] = [];
//   results[sentence[x]].push(sentence.indexOf([sentence[x]]));
// }

//Loop through letters
//if key is added: push index to key
//if key is not added: set key and push index to key

// "lighthouse in the house"
// { 
//   l: [0],
//   i: [1, 11],
//   g: [2],
//   h: [3, 5, 15, 18],
//   t: [4, 14],
//   o: [6, 19],
//   u: [7, 20],
//   s: [8, 21],
//   e: [9, 16, 22],
//   n: [12]
// }
