const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("🟢🟢🟢 Assertion Passed: " + actual + " === " + expected);
  }
  if (actual !== expected) {
    console.log("🔴🔴🔴 Assertion Failed: " + actual + " !== " + expected);
  }
};

assertEqual("Bootcamp", "Bootcamp");
assertEqual(2, 1);