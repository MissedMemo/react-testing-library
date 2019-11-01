
// simulate network request delay...
const sleep = milliseconds =>
  new Promise( resolve => {
    setTimeout( resolve, milliseconds )
  })

const greetings = ['Hello', 'Hey', 'Hi', 'Hiyuh']

export const loadGreeting = name => new Promise( res => {
  setTimeout( () => {
    const iRandom = Math.floor( Math.random() * greetings.length )
    res( `${ greetings[iRandom] }, ${ name }` )
  }, 1000)
})

// fire-and-forget function reports errors for componentDidCatch
export const reportError = async () => {
  await sleep(1000)
  return {success: true}
}