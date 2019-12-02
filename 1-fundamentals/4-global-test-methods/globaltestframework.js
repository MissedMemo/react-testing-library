const expect = actual => ({
  toBe( expected ) {
    if ( actual !== expected ) {
      throw Error(`${actual} did not equal ${expected}`)
    }
  }
})

const test = async ( title, callback ) => {
  try {
    await callback()
    console.log( `✓ ${title}`)
  } catch {
    console.log( `✗ ERROR! ${title}`)
  }
}

global.expect = expect
global.test = test
