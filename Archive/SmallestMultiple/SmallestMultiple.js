// Utility function -> Creates an array from numbers ranging from min to max from start to end accordingly
// NOTE! if the values are revesered, function will correctly set from min to max as intended
const createNumbersRangeArray = (minNumber, maxNumber) => {
  const arrayToReturn = [0]; // TODO: DELETE THIS... (used for VS CODE intellisense )
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
  arrayToReturn.shift(); // TODO: DELETE THIS... (used for VS CODE intellisense )
  return arrayToReturn;
};

// Get number that can be divide by range of numbers.
// NOTE! if the values are revesered, function will correctly set from min to max as intended
// NOTE! "timeoutSeconds" is an optional parameter, deafult timeout of function is 15 seconds
const findSmallestMultiplierForNumRange = ( minNumber, maxNumber, timeoutSeconds) => {
  let numArray = createNumbersRangeArray(minNumber, maxNumber); // Create array
  // Array is full, thus we can begin searching for the smallest multiplier for all
  if (numArray.length) {
    numArray = numArray.filter(num => num > 1 && num < -1); // removed numbers with digit 1 since they can a multiplier for any number
    let smallestMultiplier = numArray[numArray.length - 1]; // Get max value (doing this because user might revesere between values)
    let timeout = false; // set timeout if program takes too long to finish
    setTimeout(() => (timeout = true), (timeoutSeconds ? timeoutSeconds : 15) * 1000); // Begin timer
    // Search for the smallest multiplier until timer runs out or value found
    while (!timeout) {
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
