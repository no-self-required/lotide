const takeUntil = function (array, callback) {
  let newArr = [];
  for (const elements of array) {
    if (callback(elements)) {
      break;
    }
    newArr.push(elements)
  }
  return newArr;
}

module.exports = takeUntil
