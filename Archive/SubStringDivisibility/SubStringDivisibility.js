// ------------ Pandigital number utilites service ------------ //
const panDigitalNumberUtilities = (() => {
  const ALL_DIGITS_STRING = "0123456789";
  const PAN_DIGITAL_MIN_VALUE = 1023456789;
  const getDigitLength = number => {
    return isNaN(number) ? -1 : number.toString().length;
  };
  const isPanDigitalNumber = number => {
    if (getDigitLength(number) >= 10) {
      const stringifiedNumber = number.toString();
      const digitCharArray = [...ALL_DIGITS_STRING];
      return digitCharArray.every(digit => stringifiedNumber.includes(digit));
    } else {
      // All numbers with less than 10 digits cannot contain all 0-9 digits
      // Hence why we return false.
      return false;
    }
  };
  const apiClient = {
    isPanDigitalNumber: isPanDigitalNumber,
    PAN_DIGITAL_MIN_VALUE: PAN_DIGITAL_MIN_VALUE,
  };
  return apiClient;
})();

// ------------ Prime number utilites service  ------------ //
class PrimeNumbers {
  constructor() {
    this.priceNumbersArray = [];
  }

  PushNextPrimeNumber() {
    const lastIndex = this.priceNumbersArray.length - 1;
    let nextPrimeNumber =
      lastIndex < 0 ? 2 : this.priceNumbersArray[lastIndex] + 1;
    while (!this.constructor.isPrimeNumber(nextPrimeNumber)) {
      nextPrimeNumber++;
    }
    this.priceNumbersArray.push(nextPrimeNumber);
    return nextPrimeNumber;
  }
  static isPrimeNumber(number) {
    if (number === 2) {
      // 2 is the only even number that is apart of the prime number list
      return true;
    } else if (number % 2 === 0) {
      // If value is another even number (that is not 2), then return false.
      return false;
    } else {
      // Start iteration through all odd numbers only. (we're essentially Decreasing the number of iterations by removing all even numbers)
      for (let i = 3; i < number; i += 2) {
        if (number % i === 0) return false;
      }
    }
    return number !== 1 && number !== 0;
  }
}

const exportedObject = {
  PrimeNumbers: PrimeNumbers,
  panDigitalNumberUtilities: panDigitalNumberUtilities
};

module.exports = exportedObject;
