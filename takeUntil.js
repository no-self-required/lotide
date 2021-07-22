const eqArrays = function (arr1, arr2) {
  //function that takes two arrays
  if (arr1.length !== arr2.length) {
    //If length of arrays dont match return false
    return false;
  }
  for (let i = 0 ; i < arr1.length ; i++) {
    //Loop through one array
    if (arr1[i] !== arr2[i]) {
      //If any elements dont match, return false
      return false;
    }
  }
  //return true outside forloop
  return true;
};

const assertArraysEqual = function (arr1, arr2) {
  if (!eqArrays(arr1,arr2)) {
    //if eqArrays is not true
    console.log(`🔴🔴🔴 Assertion Failed: ${arr1} !== ${arr2}`);
  }
  if (eqArrays(arr1,arr2)) {
    //iff eqArrays is true
    console.log(`🟢🟢🟢 Assertion Passed: ${arr1} === ${arr2}`);
  }
};

const takeUntil = function (array, callback) {
  let newArr = [];
  for (const elements of array) {
    if (callback(elements)) {
      break;
    }
    newArr.push(elements)
  }
  return newArr;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2 ])
assertArraysEqual(takeUntil(data2, x => x === ','), [ 'I\'ve', 'been', 'to', 'Hollywood' ])

// [ 1, 2, 5, 7, 2 ]
// ---
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]
