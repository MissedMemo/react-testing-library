const { sum, difference } = require('./math')

const expect = actual => ({
  toBe( expected ) {
    if ( actual !== expected ) {
      throw Error(`${actual} did not equal ${expected}`)
    }
  }
})

expect( sum(2,3) ).toBe( 5 )
expect( difference(3,2) ).toBe( 1 )