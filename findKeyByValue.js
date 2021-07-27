const findKeyByValue = function(object, value) {
  let keyList = Object.keys(object);
  for (const key of keyList) {
    if (object[key] === value) {
      return key;
    } 
  }
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
