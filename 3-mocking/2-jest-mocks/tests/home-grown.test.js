// We can create OUR OWN implementation of jest.fn (test via: node tests/home-grown.test)

const assert = require('assert')
const utils = require('../src/utils')
const ThumbWar = require('../src/thumbwar')

//const fn = fnMock => (...args) => fnMock(...args)

const fn = impl => {
  const mockFn = (...args) => {
    mockFn.mock.calls.push(args)
    return impl(...args)
  }
  mockFn.mock = { calls: [] }
  return mockFn
}

const originalMethod = utils.calcWinner
utils.calcWinner = fn( (p1,p2) => p2 )

const winner = ThumbWar( "Bozo", "Tom" )

assert.strictEqual( winner, "Tom" )
assert.deepStrictEqual( utils.calcWinner.mock.calls, [
  [ "Bozo", "Tom" ],
  [ "Bozo", "Tom" ],
  [ "Bozo", "Tom" ]
])

utils.calcWinner = originalMethod