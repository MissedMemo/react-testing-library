const fn = ( mockFunction = () => {} ) => {
  const wrapper = (...args) => {
    wrapper.mock.calls.push(args)
    return mockFunction(...args)
  }
  wrapper.mock = { calls: [] }
  return wrapper
}

const utilsPath = require.resolve('../src/utils')

require.cache[utilsPath] = {
  id: utilsPath,
  filename: utilsPath,
  loaded: true,
  exports: {
    playRound: fn( (p1,p2) => p1 )
  }
}

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
