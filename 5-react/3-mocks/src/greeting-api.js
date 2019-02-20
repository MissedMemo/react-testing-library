export const loadGreeting = name => {

  return new Promise( res => {
    setTimeout( () => {
      res( `Hello, ${name}!` )
    }, 1000 )
  })
}
