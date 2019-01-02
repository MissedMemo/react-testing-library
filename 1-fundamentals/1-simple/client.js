const sum = (a,b) => a + b
const subtract = (a,b) => a - b

let result = sum(3,4)
let expected = 7

if ( result !== expected ) {
  throw Error(`${result} did not equal ${expected}`)
}

result = subtract(4,3)
expected = 1

if ( result !== expected ) {
  throw Error(`${result} did not equal ${expected}`)
}

/*
sumAsync = (...args) => Promise.resolve( sum(...args) )
subtractAsync = (...args) => Promise.resolve( subtract(...args) )

module.exports = { sum, sumAsync, subtract, subtractAsync }
*/