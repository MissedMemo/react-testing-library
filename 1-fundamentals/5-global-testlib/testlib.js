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

// make test routines globally accessible via: node --require ./testlib math.test.js
global.expect = expect
global.test = test