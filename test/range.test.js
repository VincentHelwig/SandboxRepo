'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { range } = require('../src/range.js');

test('counts from start (included) to end (excluded) with a default step of 1', () => {
  assert.deepEqual(range(0, 5), [0, 1, 2, 3, 4]);
  assert.deepEqual(range(-2, 2), [-2, -1, 0, 1]);
});

test('supports a custom positive step', () => {
  assert.deepEqual(range(0, 10, 3), [0, 3, 6, 9]);
  assert.deepEqual(range(0, 10, 5), [0, 5]);
});

test('supports negative steps', () => {
  assert.deepEqual(range(5, 0, -1), [5, 4, 3, 2, 1]);
  assert.deepEqual(range(10, 0, -3), [10, 7, 4, 1]);
  assert.deepEqual(range(0, -3, -1), [0, -1, -2]);
});

test('returns an empty array when start equals end', () => {
  assert.deepEqual(range(3, 3), []);
  assert.deepEqual(range(3, 3, -1), []);
});

test('returns an empty array when step points away from end', () => {
  assert.deepEqual(range(5, 0), []);
  assert.deepEqual(range(0, 5, -1), []);
});

test('supports fractional steps without accumulating float drift', () => {
  assert.deepEqual(range(0, 1, 0.25), [0, 0.25, 0.5, 0.75]);
  assert.equal(range(0, 1, 0.1).length, 10);
});

test('throws a RangeError when step is 0', () => {
  assert.throws(() => range(0, 5, 0), RangeError);
  assert.throws(() => range(0, 5, -0), RangeError);
});

test('throws a TypeError when an argument is not a finite number', () => {
  assert.throws(() => range('0', 5), TypeError);
  assert.throws(() => range(0, undefined), TypeError);
  assert.throws(() => range(0, Infinity), TypeError);
  assert.throws(() => range(0, 5, NaN), TypeError);
  assert.throws(() => range(0, 5, '1'), TypeError);
});
