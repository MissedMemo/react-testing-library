const thumbwar = require('../src/thumbwar')
const utils = require('../src/utils')

jest.mock( '../src/utils' )

test('return a winner (using jest.mock)', () => {

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

  utils.playRound.mockReset()
})
