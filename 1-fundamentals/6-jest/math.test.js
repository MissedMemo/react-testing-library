const { sum, subtract } = require('./math')

test( 'subtract two numbers', async () => {
  const result = await subtract(9,3)
  expect( result ).toBe(6)
})

test( 'sum adds two numbers', async () => {
  const result = await sum(9,3)
  expect( result ).toBe(12)
})
