const assert = require('assert')
const thumbwar = require('../src/thumbwar')
const utils = require('../src/utils')

const winner = thumbwar('john', 'sarah')

try {
  assert.strictEqual( winner, 'john' )
  console.log('success!')
} catch(e) {
  console.log('error:', e.message )
}

//console.log('winner is:', winner )