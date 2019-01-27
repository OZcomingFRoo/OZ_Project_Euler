// Calculates all the numbers from 1 to "numberRange" that mutliply by 3 or 5
// numberRange - Must be a natural number greater than 1.
function sumOfNumbersMultipleByFiveAndThree(numberRange) {
  let sumResult = 0;
  for (let num = 1; num < numberRange; num++) {
    if (num % 5 === 0 || num % 3 === 0) {
      sumResult += num;
    }
  }
  return sumResult;
}

module.exports = sumOfNumbersMultipleByFiveAndThree;
