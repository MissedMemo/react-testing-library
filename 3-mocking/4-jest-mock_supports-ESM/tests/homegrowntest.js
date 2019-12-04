// We can create OUR OWN implementation of jest.fn (test via: node tests/homegrowntest)

const assert = require('assert')
const utils = require('../src/utils')
const ThumbWar = require('../src/thumbwar')

//const fn = fnMock => (...args) => fnMock(...args)

const fn = ( impl = () => {} ) => {
  const mockFn = (...args) => {
    mockFn.mock.calls.push(args)
    return impl(...args)
  }
  mockFn.mock = { calls: [] }
  mockFn.mockImplementation = newImpl => { impl = newImpl }
  return mockFn
}

const spyOn = (api, method) => {
  const originalImplementation = api[method]
  api[method] = fn()
  api[method].mockRestore = () => { api[method] = originalImplementation }
}

spyOn( utils, 'calcWinner' )
utils.calcWinner.mockImplementation( (p1,p2) => p2 )

const winner = ThumbWar( "Bozo", "Tom" )

assert.strictEqual( winner, "Tom" )
assert.deepStrictEqual( utils.calcWinner.mock.calls, [
  [ "Bozo", "Tom" ],
  [ "Bozo", "Tom" ],
  [ "Bozo", "Tom" ]
])

utils.calcWinner.mockRestore()