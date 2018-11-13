const sum = (a,b) => a - b;

const result = sum(3,7);
const expected = 10;

if ( result !== expected ) {
  throw new Error( `${result} does not equal value: ${expected}`)
}