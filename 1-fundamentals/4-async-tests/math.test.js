const { sum, difference, product, sumAsync } = require('./math')

const expect = actual => ({
  toBe(expected) {
    if ( actual !== expected ) {
      throw Error(`value (${actual}) did not equal expected (${expected})`)
    }
  }
})

const test = async ( title, callback ) => {
  try {
    await callback()
    console.log( `✔︎ ${title}` )
  }
  catch( err ) {
    const indentedErrorText = `✘ ${ title + '\n' }  ERROR: ${err.message}`
    console.log( indentedErrorText )
  }
}

test( 'sum two numbers', () => {
  expect( sum(3,4) ).toBe(7)
})

test( 'sum two numbers ayncronously', async () => {
  const result = await sumAsync(8,9)
  expect( result ).toBe(17)
})

test( 'multiply two numbers', () => {
  expect( product(4,3) ).toBe(12)
})

test( 'subtract two numbers', () => {
  expect( difference(4,3) ).toBe(1)
})