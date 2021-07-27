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

module.exports = flatten




