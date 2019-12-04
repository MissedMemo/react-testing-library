// We can create OUR OWN implementation of jest.mock, jest.fn etc. (test via: node tests/homegrowntest)

require('../src/homegrownmocks/utils')
const utilsPath = require.resolve('../src/utils')

const homegrownmocks_utilsPath = require.resolve('../src/homegrownmocks/utils')

require.cache[utilsPath] = require.cache[homegrownmocks_utilsPath]

const assert = require('assert')
const utils = require('../src/utils')
const ThumbWar = require('../src/thumbwar')

const winner = ThumbWar( "Bozo", "Tom" )

assert.strictEqual( winner, "Tom" )
assert.deepStrictEqual( utils.calcWinner.mock.calls, [
  [ "Bozo", "Tom" ],
  [ "Bozo", "Tom" ],
  [ "Bozo", "Tom" ]
])

delete require.cache[utilsPath]