const assertEqual = function(actual, expected) {
  if (actual === expected) {
    //console.log("🟢🟢🟢 Assertion Passed: " + actual + " === " + expected);
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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


// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba)); // => true

// const abc = { a: "1", b: "2", c: "3" };
// console.log(eqObjects(ab, abc)); // => false

// assertEqual(eqObjects(ab, ba), true);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false

console.log(assertEqual(eqObjects(cd, dc), true));
console.log(assertEqual(eqObjects(cd, cd2), false));