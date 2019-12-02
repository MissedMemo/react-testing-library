const { expect, test } = require('./testframework')
const { sum, difference } = require('./mathlib')

test( 'sum should add two numbers', () => {
  const result = sum(2,3)
  const expected = 5
  expect( result ).toBe( expected )
})


test( 'difference should subtract two numbers', () => {
  const result = difference(3,2)
  const expected = 1
  expect( result ).toBe( expected )
})