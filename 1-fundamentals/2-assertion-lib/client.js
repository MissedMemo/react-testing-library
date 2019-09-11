const { sum, difference } = require('./math')

const expect = actual => ({
  toBe(expected) {
    if ( actual !== expected ) {
      throw Error(`value (${actual}) did not equal expected (${expected})`)
    }
  }
})

expect( sum(3,4) ).toBe(7)
expect( difference(4,3) ).toBe(1)
expect( sum(4,2) ).toBe(42) // should throw!