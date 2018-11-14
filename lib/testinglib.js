const expect = actual => ({
  toBe: expected => {
    if ( actual !== expected ) {
      throw new Error(`${result} does not equal value: ${expected}`)
    }
  }
})

const test = async ( title, callback ) => {
  try {
    await callback();
    console.log(`✔︎ ${title}`)
  } catch(err) {
    console.log(`✘ ${title}`)
    console.log(err)
  }
}

module.exports = { test, expect }