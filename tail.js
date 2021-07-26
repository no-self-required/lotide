const tail = function(array) {
  let tails = [];
  for (let x = 1; x < array.length; x++) {
    tails.push(array[x]);
  }
  return tails;
};

module.exports = tail;