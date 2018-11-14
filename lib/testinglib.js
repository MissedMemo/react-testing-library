// Defining methods on 'global' eliminates need for clients to 'import'
// (run tests via: node -r './lib/testinglib' test/client.test )

global.expect = actual => ({
  toBe: expected => {
    if ( actual !== expected ) {
      throw new Error(`${result} does not equal value: ${expected}`)
    }
  }
})

global.test = async ( title, callback ) => {
  try {
    await callback();
    console.log(`✔︎ ${title}`)
  } catch(err) {
    console.log(`✘ ${title}`)
    console.log(err)
  }
}