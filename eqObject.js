// const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

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

module.exports = eqObjects

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba)); // => true

// const abc = { a: "1", b: "2", c: "3" };
// console.log(eqObjects(ab, abc)); // => false

// assertEqual(eqObjects(ab, ba), true);

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// eqObjects(cd, dc); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// eqObjects(cd, cd2); // => false

// console.log(assertEqual(eqObjects(cd, dc), true));
// console.log(assertEqual(eqObjects(cd, cd2), false));