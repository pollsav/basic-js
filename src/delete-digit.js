const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const numString = n.toString();
  let maxNum = parseInt(numString.slice(1));
  for (let i = 1; i < numString.length; i++) {
    const currentNum = parseInt(numString.slice(0, i) + numString.slice(i + 1));
    if (currentNum > maxNum) {
      maxNum = currentNum;
    }
  }
  return maxNum;
}

module.exports = {
  deleteDigit,
};
