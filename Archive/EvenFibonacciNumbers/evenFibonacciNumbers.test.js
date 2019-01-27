const FibonacciSequence = require("./evenFibonacciNumbers");

// Find the number that is the closest to 4 million but does not exeed it
test("Even Fibonacci Numbers ::: Sum of Fibonacci values that do not exceed four million", () => {
  const FOUR_MILLION = 4000000;
  let sequence = new FibonacciSequence();
  // Add the next sequence to object until the sum exceeds four 4,000,000
  while (sequence.sumSequenceCollection < FOUR_MILLION) {
    sequence.pushNextSequence();
  }
  sequence.popLastSequence();
  expect(sequence.sumSequenceCollection).toBeLessThanOrEqual(FOUR_MILLION);
});
