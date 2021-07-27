const countLetters = function(sentence) {
  x = sentence.split(" ").join("");
  const count = {};
  for (const letter of x) {
    if (count[letter]) {
      count[letter] += 1;
    }
    else {
      count[letter] = 1;
    }
  }
  return count;
};

module.exports = countLetters