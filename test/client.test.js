const { test, expect } = require('../lib/testinglib');
const { sum, subtract } = require('../client.js');


test( 'should sum values', () => {
  const result = sum(7,3);
  const expected = 10;
  expect(result).toBe(expected)
})

test( 'should subtract values', () => {
  const result = subtract(7,3);
  const expected = 4;
  expect(result).toBe(expected)
})