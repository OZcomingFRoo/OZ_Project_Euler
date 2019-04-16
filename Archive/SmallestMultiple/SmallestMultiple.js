// Utility function -> Creates an array from numbers ranging from min to max from start to end accordingly
// NOTE! if the values are revesered, function will correctly set from min to max as intended
const createNumbersRangeArray = (minNumber, maxNumber) => {
  const arrayToReturn = [];
  let numTypeStr = "number";
  // Only create if given values a number type
  if (typeof minNumber === numTypeStr && typeof maxNumber === numTypeStr) {
    let minNumHolder = minNumber < maxNumber ? minNumber : maxNumber; // Store minimun number in temporarily variable
    maxNumber = minNumber < maxNumber ? maxNumber : minNumber; // Set "endNumber" to always be maximum value
    minNumber = minNumHolder; // Set "startNumber" to always be minimum value
    // Start creating Array
    for (let n = minNumber; n <= maxNumber; ++n) {
      arrayToReturn.push(n);
    }
  }
  return arrayToReturn;
};

// Get number that can be divide by range of numbers.
// NOTE! if the values are revesered, function will correctly set from min to max as intended
// NOTE! "timeoutSeconds" is an optional parameter, deafult timeout of function is 15 seconds
const findSmallestMultiplierForNumRange = (minNumber, maxNumber) => {
  let numArray = createNumbersRangeArray(minNumber, maxNumber); // Create array
  // Array is full, thus we can begin searching for the smallest multiplier for all
  if (numArray.length) {
    let smallestMultiplier = numArray[numArray.length - 1]; // Get max value (doing this because user might revesere between values)
    // Search for the smallest multiplier until value found
    while (true) {
      if(numArray.every(num => smallestMultiplier % num === 0)) {
        return smallestMultiplier; // Smallest multiplier found
      } else {
        smallestMultiplier++; // check next number
      }
    }
  }
  // From this point, there will be only negative result
  return null;
};

module.exports = {
  findSmallestMultiplierForNumRange: findSmallestMultiplierForNumRange
};
