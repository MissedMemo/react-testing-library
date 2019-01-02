const { sum, subtract } = require('./math')

const expect = actual => ({
  toBe(expected) {
    if ( actual !== expected ) {
      throw Error(`${actual} did not equal ${expected}`)
    }
  }
})

const test = async ( title, callback ) => {
  try {
    await callback()
    console.log(`✔︎ ${title}`)
  } catch(err) {
    console.error(`✘ ${title}`)
    console.error(`ERROR: ${err.message}`)
  }
}

test( 'subtract two numbers', async () => {
  const result = await subtract(9,3)
  expect( result ).toBe(6)
})

test( 'sum adds two numbers', async () => {
  const result = await sum(9,3)
  expect( result ).toBe(12)
})
