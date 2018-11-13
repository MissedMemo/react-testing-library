const expect = actual => ({
  toBe: expected => {
    if ( actual !== expected ) {
      throw new Error(`${result} does not equal value: ${expected}`)
    }
  }
})

const test = ( title, callback ) => {
  try {
    console.log(`✔︎ ${title}`)
  } catch(err) {
    console.log(`✘ ${title}`)
  }
}

const sum = (a,b) => a + b;
const subtract = (a,b) => a - b;

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