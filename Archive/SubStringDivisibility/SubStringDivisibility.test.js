// Import Util objects
const {
  panDigitalNumberUtilities,
  PrimeNumbers
} = require("./SubStringDivisibility");

// ------- Test "isPrimeNumber" function ------- //
{
  test('Test "PrimeNumbers" function part 1 "isPrimeNumber" ::: Value given 1 will return false', () => {
    expect(PrimeNumbers.isPrimeNumber(1)).toBeFalsy();
  });

  test('Test "PrimeNumbers" function part 2 "isPrimeNumber" ::: Value given 2 will return true', () => {
    expect(PrimeNumbers.isPrimeNumber(2)).toBeTruthy();
  });

  test('Test "PrimeNumbers" function part 3 "isPrimeNumber" ::: Value given 17 will return true', () => {
    expect(PrimeNumbers.isPrimeNumber(17)).toBeTruthy();
  });

  test('Test "PrimeNumbers" function part 4 "isPrimeNumber" ::: Value given million will return false', () => {
    expect(PrimeNumbers.isPrimeNumber(1000000)).toBeFalsy();
  });

  test('Test "PrimeNumbers" function part 5 "isPrimeNumber" ::: Value given 1201 will return true', () => {
    expect(PrimeNumbers.isPrimeNumber(1201)).toBeTruthy();
  });
}

// ------- Test "isPanDigitalNumber" function ------- //
{
  test('Test "isPanDigitalNumber" function part 1 ::: Value given is the min value of pandigit number. Will return true', () => {
    const minValue = panDigitalNumberUtilities.PAN_DIGITAL_MIN_VALUE;
    expect(panDigitalNumberUtilities.isPanDigitalNumber(minValue)).toBeTruthy();
  });
  test('Test "isPanDigitalNumber" function part 2 ::: Value given is has less than 10 digits. Will return false', () => {
    const value = 123456789;
    expect(panDigitalNumberUtilities.isPanDigitalNumber(value)).toBeFalsy();
  });
  test('Test "isPanDigitalNumber" function part 3 ::: Value given is 1,406,357,289 digits. Will return true', () => {
    const value = 1406357289;
    expect(panDigitalNumberUtilities.isPanDigitalNumber(value)).toBeTruthy();
  });
  test('Test "isPanDigitalNumber" function part 4 ::: Value given has more than 10 digits but does not contain all 0-9 digits. Will return false', () => {
    const value = 1234567899751234; // Notice that the digit ZERO is not in this number
    expect(panDigitalNumberUtilities.isPanDigitalNumber(value)).toBeFalsy();
  });
}

// ------- Main tests ------- //
{
  test("Main test part 1 : value 1,406,357,289 is a Pandigital number with the special property", () => {
    const value = 1406357289;
    let boolResult = false;
    boolResult = isValuePandigitalNumberWithSpecialProperty(value);
    expect(boolResult).toBeTruthy();
  });
  test("Main test part 2 : value 1023456789 (min Pandigital number) does NOT have the special property", () => {
    const value = panDigitalNumberUtilities.PAN_DIGITAL_MIN_VALUE;
    let boolResult = isValuePandigitalNumberWithSpecialProperty(value);
    expect(boolResult).toBeFalsy();
  });
  // DO NOT RUN THIS TEST, it's written way to naive and takes to long to finish!
  // test("Main test part 3 : Sum of all pandigital numbers that have the special property", async () => {
  //   async function wrapLongProcess(dropTestCallBack){
  //     let sum = 0;
  //     const minPanDigitalVal = panDigitalNumberUtilities.PAN_DIGITAL_MIN_VALUE;
  //     const maxPanDigitalVal = panDigitalNumberUtilities.PAN_DIGITAL_MAX_VALUE;
  //     setTimeout(()=> { throw new Error(); },1000);
  //     for (let numValue = minPanDigitalVal + 1; numValue < maxPanDigitalVal; numValue++) {
  //         // Lets just iterate
  //          if(isValuePandigitalNumberWithSpecialProperty(numValue)){
  //            sum += numValue;
  //          }
  //     }
  //     return sum;
  //   }
  //   const result = await wrapLongProcess();
  //   console.log("FINALLY ::::::::::::::::: ", result);
  //   expect(result).toBeGreaterThan(0);
  // });
}

function isValuePandigitalNumberWithSpecialProperty(value) {
  // 1st check that the number is a pandigital Number
  if (panDigitalNumberUtilities.isPanDigitalNumber(value)) {
    const primeNumbers = new PrimeNumbers();
    const digits = value.toString().substr(1).match(/[0-9]/g);
    for (let index = 0; index + 2 < digits.length; index++) {
      let stringNum = digits[index] + digits[index + 1] + digits[index + 2];
      const num = parseInt(stringNum);
      const lastPrimeNumber = primeNumbers.PushNextPrimeNumber();
      if (num % lastPrimeNumber !== 0) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

// Note on why I use curly brackets:
// Visual studio Code (the IDE I'm using to write this project) lets me "open and close" all code that is inside curly brackets
// It gives me the option to scroll way faster to a specific section in my JS file
// It also makes it much eaiser to read what section contains, giving by the comment title I add above the curly brackets containers
