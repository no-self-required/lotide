const eqArrays = require('./eqArrays');

const eqObjects = function(obj1, obj2) {
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

