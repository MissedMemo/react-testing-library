/*
function add(a: number, b: number): number {
  return a + b
}
*/

const add = (a: number, b: number): number => a + b

interface User {
  name: {
    first: string
    middle: string
    last: string
  }
}

function getFullName(user: User): string {
  const {
    name: {first, middle, last},
  } = user
  return [first, middle, last].filter(Boolean).join('')
}

add(1, 2)

getFullName({name: {first: 'Joe', middle: 'Bud', last: 'Matthews'}})

/* Original version... (without TypeScript)

function add(a, b) {
  return a + b
}

function getFullName(user) {
  const {
    name: {first, middle, last},
  } = user
  return [first, middle, last].filter(Boolean).join('')
}

add(1, 'two')

getFullName({name: {first: 'Joe', midd1e: 'Bud', last: 'Matthews'}})
*/
