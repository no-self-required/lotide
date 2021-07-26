// const assertEqual = require('./assertEqual');

const findKey = function (object, callback) {
  let keyObjects = Object.keys(object);
  //Create array of object keys
  for (const key of keyObjects) {
    //Loop through keys
    if (callback(object[key])) {
      //If callback(object[key]) is true, return key of that value
      //Using object[key] points to the value!!
      return key;
    }
  }
};

module.exports = findKey
// assertEqual(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2), "noma") // => "noma"


