const expect = actual => ({
  toBe: expected => {
    if ( actual !== expected ) {
      throw new Error(`${result} does not equal value: ${expected}`)
    }
  }
})

const test = ( title, callback ) => {
  try {
    callback();
    console.log(`✔︎ ${title}`)
  } catch(err) {
    console.log(`✘ ${title}`)
    console.log(err)
  }
}

module.exports = { test, expect }