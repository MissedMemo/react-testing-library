const _ = require('../lib/testinglib');
const { sum, sumAsync, subtract, subtractAsync } = require('../client.js');


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

_.test( 'should sum values asyncronously', async () => {
  const result = await sumAsync(7,4)
  const expected = 11;
  _.expect(result).toBe(expected)
})

_.test( 'should subtract values asyncronously', async () => {
  const result = await subtractAsync(7,2);
  const expected = 4;
  _.expect(result).toBe(expected)
})
