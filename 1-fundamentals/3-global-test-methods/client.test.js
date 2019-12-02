/************************[ IMPORTANT! ]***************************
 run tests via: node --require ./globaltestframework client.test
******************************************************************/

const { sum, difference, asyncDiff, asyncSum } = require('./mathlib')

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

test( 'async version of sum should add two numbers', async () => {
  const result = await asyncSum(2,3)
  const expected = 5
  expect( result ).toBe( expected )
})


test( 'async version of difference should subtract two numbers', async () => {
  const result = await asyncDiff(3,2)
  const expected = 1
  expect( result ).toBe( expected )
})