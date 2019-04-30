const Grid = require('./LatticePaths');

// Test the example given by task
test("There are 6 paths from top-left to bottom-right in a 2x2 grid", () => {
  let twoOnTwoGrid = new Grid(2 ,2);
  let result = twoOnTwoGrid.numberOfRoute();
  expect(result).toEqual(6);
});

// Solving Task
test("There are more than 6 paths from top-left to bottom-right a 20x20 grid", () => {
    let twoOnTwoGrid = new Grid(20 ,20);
    let result = twoOnTwoGrid.numberOfRoute();
    expect(result).toBeGreaterThan(6);
  });