const eqObjects = function(obj1, obj2) {
  //check length of keys
  //check value of key for one obj to see if its same value as key in other 
  let x = Object.keys(obj1);
  let y = Object.keys(obj2)
  let check = true;
  if (x.length !== y.length) {
    check = false;
  }
  else {
    for (const key of x) {
      if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
        if (!eqArrays(obj1[key], obj2[key])) {
          check = false;
        }
        else {
          check = true;
        }
      } 
      else {
        if (obj1[key] !== obj2[key]) {
          check = false;
        } else {
          check = true;
        }
      }
    }
  }
  return check;
}

// const assertArraysEqual = function (arr1, arr2) {
//   if (!eqArrays(arr1,arr2)) {
//     //if eqArrays is not true
//     console.log(`🔴🔴🔴 Assertion Failed: ${arr1} !== ${arr2}`);
//   }
//   if (eqArrays(arr1,arr2)) {
//     //iff eqArrays is true
//     console.log(`🟢🟢🟢 Assertion Passed: ${arr1} === ${arr2}`);
//   }
// };

const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;
  if (!eqObjects(actual, expected)) {
    console.log(`🔴🔴🔴 Assertion Failed: ${inspect(actual)}`);
  }
  if (eqObjects(actual, expected)) {
    console.log(`🟢🟢🟢 Assertion Passed: ${inspect(actual)}`);
  }
}

assertObjectsEqual({ a: '1', b: 2 },{ b: 2, a: '1' });