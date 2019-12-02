const expect = actual => ({
  toBe( expected ) {
    if ( actual !== expected ) {
      throw Error(`${actual} did not equal ${expected}`)
    }
  }
})

const test = ( title, callback ) => {
  try {
    callback()
    console.log( `✓ ${title}`)
  } catch {
    console.log( `✗ ERROR! ${title}`)
  }
}

module.exports = {
  expect, test
}