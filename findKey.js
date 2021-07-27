const findKey = function (object, callback) {
  let keyObjects = Object.keys(object);
  for (const key of keyObjects) {
    if (callback(object[key])) {
      return key;
    }
  }
};

module.exports = findKey


