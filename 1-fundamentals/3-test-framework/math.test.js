const { sum, subtract } = require('./math')

const expect = actual => ({
  toBe(expected) {
    if ( actual !== expected ) {
      throw Error(`${actual} did not equal ${expected}`)
    }
  }
})

const test = ( title, callback ) => {
  try {
    callback()
    console.log(`✔︎ ${title}`)
  } catch(err) {
    console.error(`✘ ${title}`)
    console.error(`ERROR: ${err.message}`)
  }
}

test( 'subtract two numbers', () => {
  const result = subtract(9,3)
  expect( result ).toBe(6)
})

test( 'sum adds two numbers', () => {
  const result = sum(9,3)
  expect( result ).toBe(12)
})
