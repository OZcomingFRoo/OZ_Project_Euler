const sumOfNumbersMultipleByFiveAndThreeFunc = require("./multiplesThreeFive");

// Test the example given by task
test("Sum of all numbers multiply by of 3 OR 5 ::: Test example (sum of numbers mutliply by 3 OR 5 below 10)", () => {
  expect(sumOfNumbersMultipleByFiveAndThreeFunc(10)).toEqual(23);
});

// Test against numbers below 3.
test("Sum of all numbers multiply by of 3 OR 5 ::: Test all numbers below 3 (all should equal 0)", () => {
  const boolResult = [1, 2]
    .map(num => sumOfNumbersMultipleByFiveAndThreeFunc(num))
    .every(sumResult => sumResult === 0);
  expect(boolResult).toBeTruthy();
});

// Test the task (sum of numbers mutliply by 3 OR 5 under 1000)
// Result will be "233,168"
test("Sum of all numbers multiply by of 3 OR 5 ::: find the sum of all numbers (mutliply by 3 OR 5) below 1000", () => {
  const sumResult = sumOfNumbersMultipleByFiveAndThreeFunc(1000);
  expect(sumResult).toBeGreaterThan(sumOfNumbersMultipleByFiveAndThreeFunc(10));
});
