const middle = function (array) {
  if (array.length === 1 || array.length === 2) {
    return [];
  }
  else if (array.length % 2 === 0) {
    array.sort();
    let newArr = [];
    newArr.push(array[Math.floor(((array.length) / 2) - 1)]);
    newArr.push(array[Math.floor((array.length) / 2)]);
    return newArr;
  }
  else if (!array.length % 2 === 0) {
    return array[Math.floor(array.length / 2)];
  }
};

module.exports = middle;