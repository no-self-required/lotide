const assertArraysEqual = function(arr1, arr2) {
  if (!eqArrays(arr1,arr2)) {
    //if eqArrays is not true
    console.log(`🔴🔴🔴 Assertion Failed: ${arr1} !== ${arr2}`);
  }
  if (eqArrays(arr1,arr2)) {
    //iff eqArrays is true
    console.log(`🟢🟢🟢 Assertion Passed: ${arr1} === ${arr2}`);
  }
};

const eqArrays = function(arr1, arr2) {
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
}

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

console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]



//how would I write the function myself
