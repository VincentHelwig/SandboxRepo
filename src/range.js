'use strict';

/**
 * Returns the numbers from `start` (included) to `end` (excluded), spaced by `step`.
 * A negative `step` counts down; a step pointing away from `end` yields an empty array.
 * @param {number} start
 * @param {number} end
 * @param {number} [step=1]
 * @returns {number[]}
 * @throws {TypeError} if `start`, `end` or `step` is not a finite number.
 * @throws {RangeError} if `step` is 0.
 */
function range(start, end, step = 1) {
  for (const [name, value] of [['start', start], ['end', end], ['step', step]]) {
    if (typeof value !== 'number' || !Number.isFinite(value)) {
      throw new TypeError(`range expects ${name} to be a finite number, got ${String(value)}`);
    }
  }
  if (step === 0) {
    throw new RangeError('range expects step to be non-zero');
  }
  const numbers = [];
  // Compute each value from the index rather than accumulating, to avoid float drift.
  for (let index = 0; ; index++) {
    const value = start + index * step;
    if (step > 0 ? value >= end : value <= end) {
      break;
    }
    numbers.push(value);
  }
  return numbers;
}

module.exports = { range };
