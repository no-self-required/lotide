const eqArrays = require('./eqArrays');

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

module.exports = assertArraysEqual;
