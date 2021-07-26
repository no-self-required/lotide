// const assertEqual = require('./assertEqual');

const findKeyByValue = function(object, value) {
  let keyList = Object.keys(object);
  //Create array of key names
  for (const key of keyList) {
    //Loop through key names
    if (object[key] === value) {
      //If keyname value is equal to value; return key name
      return key;
    } 
  }
  //return undefined if theres no keyname
  return undefined;
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  action: "Game of Thrones",
  cartoon: "Avatar"
};

module.exports = findKeyByValue

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
// assertEqual(findKeyByValue(bestTVShowsByGenre, "Game of Thrones"), "action");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "Avatar"), "cartoon");

// findKeyByValue({ 
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// }, 'x')
