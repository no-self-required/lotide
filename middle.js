const eqArrays = function (arr1, arr2) {
  //function that takes two arrays
  if (arr1.length !== arr2.length) {
    //If length of arrays dont match return false
    return false;
  }
  for (let i = 0 ; i < arr1.length ; i++) {
    //Loop through one array. this loop checks for false cases
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

const middle = function (array) {
  //return middle most elements of given array
  //if array has 1 or 2 elements, return empty array
  if (array.length === 1 || array.length === 2) {
    return [];
  }
  //even number of elements: return 2 elements in the middle 
  else if (array.length % 2 === 0) {
    let newArr = [];
    let x = Math.floor((array.length)/ 2);
    newArr.push(x);
    newArr.push(x + 1);
    return newArr;
  }
  //odd # of elements: return 1 single element 
  else if (!array.length % 2 === 0) {
    return array[Math.floor(array.length / 2)];
    // return array[x];
  }
};

console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []

console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]

console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]


// TEST CODE
assertArraysEqual(middle([1]), []);
