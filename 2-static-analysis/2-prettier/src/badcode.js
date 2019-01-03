// fixed...

const name = "Freddy";
typeof name === "string";

if (!("serviceWorker" in navigator)) {
  // you have an old browser :-(
}

const greeting = "hello";

// eslint-disable-next-line no-console
console.log(`${greeting} world!`)

// eslint-disable-next-line no-console
;[(1, 2, 3)].forEach(n => console.log(n));

/* original (broken)

const name = 'Freddy'
typeof name === 'string'

if (!'serviceWorker' in navigator) {
  // you have an old browser :-(
}

const greeting = 'hello'
console.log('${greeting} world!')

[(1, 2, 3)].forEach(x => console.log(x))
*/
