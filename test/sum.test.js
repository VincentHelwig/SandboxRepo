'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { sum } = require('../src/sum.js');

test('returns 0 for an empty array', () => {
  assert.equal(sum([]), 0);
});

test('sums an array of numbers', () => {
  assert.equal(sum([1, 2, 3]), 6);
  assert.equal(sum([-1, 1.5, 2]), 2.5);
});

test('throws a TypeError on non-number items', () => {
  assert.throws(() => sum([1, '2', 3]), TypeError);
  assert.throws(() => sum([1, null]), TypeError);
  assert.throws(() => sum([undefined]), TypeError);
  assert.throws(() => sum([{}]), TypeError);
});

test('throws a TypeError when not given an array', () => {
  assert.throws(() => sum('123'), TypeError);
  assert.throws(() => sum(undefined), TypeError);
});
