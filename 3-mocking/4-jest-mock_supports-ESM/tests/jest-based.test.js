const { calcWinner } = require('../src/utils')
const ThumbWar = require('../src/thumbwar')

// 'mock' supports ESM & destructured method refs (here, and inside ThumbWar)
jest.mock( '../src/utils', () => ({
  calcWinner: jest.fn( (p1,p2) => p2 )
}))

test( 'should return winner', () => {

  const winner = ThumbWar( "Bozo", "Tom" )
  expect( winner ).toBe( "Tom" )

  /*
  expect( calcWinner ).toHaveBeenCalledTimes(3)
  expect( calcWinner ).toHaveBeenCalledWith( "Bozo", "Tom" )
  expect( calcWinner ).toHaveBeenNthCalledWith( 1, "Bozo", "Tom" )
  expect( calcWinner ).toHaveBeenNthCalledWith( 2, "Bozo", "Tom" )
  expect( calcWinner ).toHaveBeenNthCalledWith( 3, "Bozo", "Tom" )
  */

 // test below is EQUIVALENT TO all of the above
  expect( calcWinner.mock.calls ).toEqual([
    [ "Bozo", "Tom" ],
    [ "Bozo", "Tom" ],
    [ "Bozo", "Tom" ]
  ])

  calcWinner.mockReset()
})