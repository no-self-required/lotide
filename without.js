const without = function (arr, itemsArr) {
  let newArr = [];
  for (let i = 0 ; i < arr.length ; i++) {
    let match = false;
    for (let x = 0 ; x < itemsArr.length ; x++) {
      if (arr[i] === itemsArr[x]) {
        match = true;
      }
    }
    if (!match) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

module.exports = without

