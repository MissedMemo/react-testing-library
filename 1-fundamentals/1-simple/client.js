const sum = (a,b) => a + b
const difference = (a,b) => a - b

let actual = sum(3,4)
let expected = 7

if ( actual !== expected ) {
  throw Error(`sum(3,4) result of ${actual} did not match expected value ${expected}`)
}

actual = difference(4,3)
expected = 1

if ( actual !== expected ) {
  throw Error(`difference(4,3) result of ${actual} did not match expected value ${expected}`)
}