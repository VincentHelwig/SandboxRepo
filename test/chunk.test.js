'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { chunk } = require('../src/chunk.js');

test('returns an empty array for an empty array', () => {
  assert.deepEqual(chunk([], 3), []);
});

test('splits an array into chunks of exactly size items', () => {
  assert.deepEqual(chunk([1, 2, 3, 4], 2), [[1, 2], [3, 4]]);
});

test('the last chunk may be shorter', () => {
  assert.deepEqual(chunk([1, 2, 3, 4, 5], 2), [[1, 2], [3, 4], [5]]);
});

test('returns a single chunk when size is at least the array length', () => {
  assert.deepEqual(chunk([1, 2, 3], 3), [[1, 2, 3]]);
  assert.deepEqual(chunk([1, 2, 3], 10), [[1, 2, 3]]);
});

test('size 1 puts every item in its own chunk', () => {
  assert.deepEqual(chunk(['a', 'b', 'c'], 1), [['a'], ['b'], ['c']]);
});

test('does not mutate the input array', () => {
  const items = [1, 2, 3];
  chunk(items, 2);
  assert.deepEqual(items, [1, 2, 3]);
});

test('throws a RangeError when size is not a positive integer', () => {
  assert.throws(() => chunk([1, 2], 0), RangeError);
  assert.throws(() => chunk([1, 2], -1), RangeError);
  assert.throws(() => chunk([1, 2], 1.5), RangeError);
  assert.throws(() => chunk([1, 2], NaN), RangeError);
  assert.throws(() => chunk([1, 2], Infinity), RangeError);
  assert.throws(() => chunk([1, 2], '2'), RangeError);
  assert.throws(() => chunk([1, 2], undefined), RangeError);
});

test('throws a TypeError when not given an array', () => {
  assert.throws(() => chunk('abc', 1), TypeError);
  assert.throws(() => chunk(undefined, 1), TypeError);
});
