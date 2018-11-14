const _ = require('../lib/testinglib');
const { sum, subtract } = require('../client.js');


_.test( 'should sum values', () => {
  const result = sum(7,3);
  const expected = 10;
  _.expect(result).toBe(expected)
})

_.test( 'should subtract values', () => {
  const result = subtract(7,3);
  const expected = 4;
  _.expect(result).toBe(expected)
})