const assertEqual = function(actual, expected) {
  if (actual === expected) {
    //console.log("🟢🟢🟢 Assertion Passed: " + actual + " === " + expected);
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  let tails = [];
  for (let x = 1; x < array.length; x++) {
    tails.push(array[x]);
  }
  return tails;
};

const words = ['Yo Yo', 'Lighthouse', 'Labs'];
tail(words);
assertEqual(words.length, 3);