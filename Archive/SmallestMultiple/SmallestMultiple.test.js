const { findSmallestMultiplierForNumRange } = require("./SmallestMultiple");

// Test the example given by task
test("2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder", () => {
  expect(findSmallestMultiplierForNumRange(1,10)).toEqual(2520);
});

// Task... 
test("Smallest multiplier between 1-20", () => {
  expect(findSmallestMultiplierForNumRange(1,20)).toBeDefined();
});