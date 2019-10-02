
const greetings = ['Hello', 'Hey', 'Hi', 'Hiyuh']

export const loadGreeting = name => new Promise( res => {
  setTimeout( () => {
    const iRandom = Math.floor( Math.random() * greetings.length )
    res( `${ greetings[iRandom] }, ${ name }` )
  }, 1000)
})

