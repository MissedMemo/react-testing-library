const { sum, subtract } = require('./math')

const expect = actual => ({
  toBe(expected) {
    if ( actual !== expected ) {
      throw Error(`${result} did not equal ${expected}`)
    }
  }
})

let result = subtract(4,3)
expect( result ).toBe(1)

result = sum(4,3)
expect( result ).toBe(7)
