const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const counts = Array(26).fill(0);
  for (let i = 0; i < s1.length; i++) {
    const index = s1.charCodeAt(i) - 'a'.charCodeAt(0);
    counts[index]++;
  }
  let commonCount = 0;
  for (let i = 0; i < s2.length; i++) {
    const index = s2.charCodeAt(i) - 'a'.charCodeAt(0);
    if (counts[index] > 0) {
      commonCount++;
      counts[index]--;
    }
  }
  return commonCount;
}

module.exports = {
  getCommonCharacterCount,
};
