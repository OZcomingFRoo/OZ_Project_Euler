// Object that contains Fibonacci-Sequence array.
// You can easily add the next Fibonacci value to the array with "pushNextSequence"
class FibonacciSequence {
  constructor(sequenceRange) {
    this.sequenceArray = FibonacciSequence.getSequence(sequenceRange);
  }

  // Adds the next number to the "sequenceArray" property
  pushNextSequence() {
    const lastIndex = this.sequenceArray.length - 1; // get last index
    const arr = this.sequenceArray;
    if (lastIndex > 1) {
      arr.push(arr[lastIndex] + arr[lastIndex - 1]); // add the next Fibonacci number
    } else {
      // Since arr[0] = 1 AND arr[1] = 2 are basically => value = (ndex + 1), all we need to do is incrament the index by 1
      arr.push(lastIndex + 1);
    }
  }

  // Removes last sequence and returns it
  popLastSequence() {
    return this.sequenceArray.length > 0 ? this.sequenceArray.pop() : null;
  }

  // Returns the sum of sequence array
  get sumSequenceCollection() {
    return this.sequenceArray.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
  }

  // returns an array of numbers that are apart of the Fibonacci numbers. start from 1 and 2...
  // sequenceRange -> range of the sequence to get after 2 (e.g. 2 , will return [1,2,3,5])
  static getSequence(sequenceRange) {
    let arr = [1, 2];
    for (let index = 0; index < sequenceRange; index++) {
      const lastIndex = arr.length - 1; // get last index
      arr.push(arr[lastIndex] + arr[lastIndex - 1]); // add the next Fibonacci number
    }
    return arr;
  }
}
module.exports = FibonacciSequence;
