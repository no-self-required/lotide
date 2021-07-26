const eqArrays = function (arr1, arr2) {
  //function that takes two arrays
  if (arr1.length !== arr2.length) {
    //If length of arrays dont match return false
    return false;
  }
  for (let i = 0 ; i < arr1.length ; i++) {
    //Loop through one array
    if (arr1[i] !== arr2[i]) {
      //If any elements dont match, return false
      return false;
    }
  }
  //return true outside forloop
  return true;
};

module.exports = eqArrays






// eqArrays([1, 2, 3], [1, 2, 3]) // => true
// eqArrays([1, 2, 3], [3, 2, 1]) // => false

// eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
// eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false





// for (let i = 0 ; i < arr1.length ; i++) {
//   for (let x = 0 ; x < arr2.length ; x++) {
//     if (arr1[i] === arr2[x]) {
//       console.log(true);
//       break;
//     }
//     else {
//       console.log(false);
//       break;
//     }
//   }
// }

// const eqArrays = function (arr1, arr2) {
//   let result = arr1.length === arr2.length && arr1.every(function (element) {
//     return arr2.indexOf(element) !== -1;
//   })
// };

// const eqArrays = (arr1, arr2) => arr1.length === arr2.length && arr1.every(function (element, index) {
//   if(element === arr2[index]) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// });

// const eqArrays = function (arr1, arr2) {
//   if (arr1.length != arr2.length) {
//     return false;
//   }
//   for (let i = 0 ; i < arr1.length ; i++) {
//     if (arr1[i] != arr2[i]) {
//       console.log("false");
//     }
//     else {
//       console.log("true");
//     }
//   }  
// }