// We can create OUR OWN implementation of jest.mock, jest.fn etc. (test via: node tests/homegrowntest)

const fn = ( impl = () => {} ) => {
  const mockFn = (...args) => {
    mockFn.mock.calls.push(args)
    return impl(...args)
  }
  mockFn.mock = { calls: [] }
  mockFn.mockImplementation = newImpl => { impl = newImpl }
  return mockFn
}

const utilsPath = require.resolve('../src/utils')

require.cache[utilsPath] = {
  id: utilsPath,
  filename: utilsPath,
  loaded: true,
  exports: {
    calcWinner: fn( (p1,p2) => p2 )
  }
}

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