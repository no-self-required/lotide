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

const without = function (arr, itemsArr) {
  let newArr = [];
  //Create empty array
  for (let i = 0 ; i < arr.length ; i++) {
    //Loop through array
    let match = false;
    //Set a boolean tracker to false
    for (let x = 0 ; x < itemsArr.length ; x++) {
      //Loop through items array
      if (arr[i] === itemsArr[x]) {
        //If element in array match element in items array 
        match = true;
        //Set tracker to true
      }
    }
    if (!match) {
      //If match is false, push current element at arr to empty array.
      //If match is true, skip and push other false elements.
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]
console.log(without([1, 2, 3, 1, 1, 4, '3', 1], [1, '3'])) // 2 3 4 3

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); 
// // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);

const words = [1, 2, 3, 1, 1, 4, 3, 1];
without(words, [1]); 
assertArraysEqual(words, [1, 2, 3, 1, 1, 4, 3, 1]);
//expect: 2 3 4 3

