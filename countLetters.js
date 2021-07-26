// const assertEqual = require('./assertEqual');

const countLetters = function(sentence) {
  //return count of each letters in sentence(string)
  //LHL = L:2, H:1
  //join split sentence
  //add each count to object
  x = sentence.split(" ").join("");
  //remove spaces from sentence
  const count = {};
  for (const letter of x) {
    //Loop through each letter of sentence
    if (count[letter]) {
      count[letter] += 1;
      //if letter key is already added, add 1 to value
    }
    else {
      //Add letter key and set value to 1 if its not yet added
      count[letter] = 1;
    }
  }
  return count;
  //return letter count object
};

module.exports = countLetters

// console.log(countLetters("lighthouse in the house"));

// assertEqual(countLetters('abc')['a'], 1)