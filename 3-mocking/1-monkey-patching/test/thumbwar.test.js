const assert = require('assert')
const thumbwar = require('../src/thumbwar')
const utils = require('../src/utils')

const originalMethod = utils.playRound
utils.playRound = (p1,p2) => p1

const winner = thumbwar('john', 'sarah')

try {
  assert.strictEqual( winner, 'john' )
  console.log('success!')
} catch(e) {
  console.log('error:', e.message )
}

// clean up...
utils.playRound = originalMethod