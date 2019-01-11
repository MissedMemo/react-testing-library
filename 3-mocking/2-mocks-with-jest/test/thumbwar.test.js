const thumbwar = require('../src/thumbwar')
const utils = require('../src/utils')

test('return a winner', () => {
  const originalMethod = utils.playRound
  utils.playRound = jest.fn( (p1,p2) => p1 )

  const winner = thumbwar('john', 'sarah')

  expect( winner ).toBe('john')
  expect( utils.playRound ).toHaveBeenCalledTimes(2)
  expect( utils.playRound ).toHaveBeenCalledWith( 'john', 'sarah' )

  utils.playRound = originalMethod
})
