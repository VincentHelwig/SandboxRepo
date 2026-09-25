'use strict';

/**
 * Splits an array into consecutive arrays of at most `size` items.
 * The last chunk may be shorter.
 * @template T
 * @param {T[]} items
 * @param {number} size
 * @returns {T[][]}
 * @throws {TypeError} if `items` is not an array.
 * @throws {RangeError} if `size` is not a positive integer.
 */
function chunk(items, size) {
  if (!Array.isArray(items)) {
    throw new TypeError('chunk expects an array of items');
  }
  if (!Number.isInteger(size) || size <= 0) {
    throw new RangeError(`chunk expects size to be a positive integer, got ${size}`);
  }
  const chunks = [];
  for (let start = 0; start < items.length; start += size) {
    chunks.push(items.slice(start, start + size));
  }
  return chunks;
}

module.exports = { chunk };
