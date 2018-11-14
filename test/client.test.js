const { sum, sumAsync, subtract, subtractAsync } = require('../client.js');


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

test( 'should sum values asyncronously', async () => {
  const result = await sumAsync(7,4)
  const expected = 11;
  expect(result).toBe(expected)
})

test( 'should subtract values asyncronously', async () => {
  const result = await subtractAsync(7,2);
  const expected = 4;
  expect(result).toBe(expected)
})
