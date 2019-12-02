

const username = 'freddy'
typeof username === 'string'

if ( !('serviceworker' in navigator) ) {
  // old browser!
}

const greeting = 'hello'
console.log(`${greeting} world!`)

;[1,2,3].array.forEach( n => {
  console.log(n)
})

/* BROKEN version below...

'use strict'

const username = 'freddy'
typeof username === 'strng'

if ( !'serviceworker' in navigator ) {
  // old browser!
}

const greeting = 'hello'
console.log('${greeting} world!')

[1,2,3].array.forEach( n => {
  console.log(n)
})

*/