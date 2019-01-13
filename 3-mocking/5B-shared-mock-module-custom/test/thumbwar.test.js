require('../src/mocks/utils') // prime the cache (create it, and insert actual entry)
const utilsPath = require.resolve('../src/utils')
const utilsMockPath = require.resolve('../src/mocks/utils')

require.cache[utilsPath] = require.cache[utilsMockPath]

const assert = require('assert')
const thumbwar = require('../src/thumbwar')
const utils = require('../src/utils')

const winner = thumbwar('john', 'sarah')

try {
  assert.strictEqual( winner, 'john' )
  assert.deepStrictEqual( utils.playRound.mock.calls, [
    [ 'john', 'sarah' ],
    [ 'john', 'sarah' ]
  ])
  console.log('success!')
} catch(e) {
  console.log('error:', e.message )
}

delete require.cache[utilsPath]
