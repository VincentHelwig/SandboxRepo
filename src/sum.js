'use strict';

/**
 * Returns the sum of an array of numbers.
 * @param {number[]} numbers
 * @returns {number}
 * @throws {TypeError} if `numbers` is not an array or contains a non-number item.
 */
function sum(numbers) {
  if (!Array.isArray(numbers)) {
    throw new TypeError('sum expects an array of numbers');
  }
  let total = 0;
  for (const [index, item] of numbers.entries()) {
    if (typeof item !== 'number') {
      throw new TypeError(`sum expects only numbers, got ${typeof item} at index ${index}`);
    }
    total += item;
  }
  return total;
}

module.exports = { sum };
