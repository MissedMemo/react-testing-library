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

// make available by running node via: node --require ./testlib.js math.test
global.expect = expect
global.test = test