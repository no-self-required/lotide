const middle = function (array) {
  //return middle most elements of given array
  //if array has 1 or 2 elements, return empty array
  if (array.length === 1 || array.length === 2) {
    return [];
  }
  //even number of elements: return 2 elements in the middle 
  else if (array.length % 2 === 0) {
    array.sort();
    let newArr = [];
    newArr.push(array[Math.floor(((array.length) / 2) - 1)]);
    newArr.push(array[Math.floor((array.length) / 2)]);
    return newArr;
  }
  //odd # of elements: return 1 single element 
  else if (!array.length % 2 === 0) {
    return array[Math.floor(array.length / 2)];
    // return array[x];
  }
};

module.exports = middle;