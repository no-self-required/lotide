// const assertArraysEqual = require('./assertArraysEqual');

const flatten = function(array) {
  let newArr = [];
  for (let x = 0 ; x < array.length ; x++) {
    if (Array.isArray(array[x])) {
      newArr = newArr.concat(array[x]);
    }
    else {
      newArr.push(array[x]);
    }
  }
  return newArr;
};

module.exports = flatten
// console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]



//how would I write the function myself
