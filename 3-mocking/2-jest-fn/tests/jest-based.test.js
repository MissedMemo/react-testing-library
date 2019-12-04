const utils = require('../src/utils')
const ThumbWar = require('../src/thumbwar')

test( 'should return winner', () => {
  const originalMethod = utils.calcWinner
  utils.calcWinner = jest.fn( (p1,p2) => p2 )

  const winner = ThumbWar( "Bozo", "Tom" )
  expect( winner ).toBe( "Tom" )

  /*
  expect( utils.calcWinner ).toHaveBeenCalledTimes(3)
  expect( utils.calcWinner ).toHaveBeenCalledWith( "Bozo", "Tom" )
  expect( utils.calcWinner ).toHaveBeenNthCalledWith( 1, "Bozo", "Tom" )
  expect( utils.calcWinner ).toHaveBeenNthCalledWith( 2, "Bozo", "Tom" )
  expect( utils.calcWinner ).toHaveBeenNthCalledWith( 3, "Bozo", "Tom" )
  */

 // test below is EQUIVALENT TO all of the above
  expect( utils.calcWinner.mock.calls ).toEqual([
    [ "Bozo", "Tom" ],
    [ "Bozo", "Tom" ],
    [ "Bozo", "Tom" ]
  ])
  utils.calcWinner = originalMethod
})