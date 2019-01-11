const thumbwar = require('../src/thumbwar')
const utils = require('../src/utils')

test('return a winner (using JEST\'S fn wrapper)', () => {
  const originalMethod = utils.playRound
  utils.playRound = jest.fn( (p1,p2) => p1 )

  const winner = thumbwar('john', 'sarah')

  expect( winner ).toBe('john')
  expect( utils.playRound ).toHaveBeenCalledTimes(2)
  expect( utils.playRound ).toHaveBeenCalledWith( 'john', 'sarah' )

  // these are identical...
  expect( utils.playRound ).toHaveBeenNthCalledWith( 1, 'john', 'sarah' )
  expect( utils.playRound ).toHaveBeenNthCalledWith( 2, 'john', 'sarah' )
  expect( utils.playRound.mock.calls ).toEqual([
    [ 'john', 'sarah' ],
    [ 'john', 'sarah' ]
  ])

  utils.playRound = originalMethod
})

test('return a winner (using a CUSTOM fn wrapper)', () => {

  const fnWrapper = fn => {
    const fnMock = (...args) => {
      fnMock.mock.calls.push(args)
      return fn(...args)
    }
    fnMock.mock = { calls: [] }
    return fnMock
  }

  const originalMethod = utils.playRound
  utils.playRound = fnWrapper( (p1,p2) => p1 )

  const winner = thumbwar('john', 'sarah')

  expect( winner ).toBe('john')
  expect( utils.playRound.mock.calls ).toEqual([
    [ 'john', 'sarah' ],
    [ 'john', 'sarah' ]
  ])

  utils.playRound = originalMethod
})
