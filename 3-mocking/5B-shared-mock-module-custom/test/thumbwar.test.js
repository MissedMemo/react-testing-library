const utilsPath = require.resolve('../src/utils')

const fn = ( mockFunction ) => {
  const wrapper = (...args) => {
    wrapper.mock.calls.push(args)
    return mockFunction(...args)
  }
  wrapper.mock = { calls: [] }
  return wrapper
}

require.cache[utilsPath] = {
  id: utilsPath,
  filename: utilsPath,
  loaded: true,
  exports : {
    playRound: fn( (p1,p2) => p1 )
  }
}

const thumbwar = require('../src/thumbwar')
const utils = require('../src/utils')

test('return a winner (using custom re-implementation of jest.mock)', () => {

  const winner = thumbwar('john', 'sarah')

  //expect( winner ).toBe('john')
  console.log( 'winner:', utils.playRound )
  console.log( 'utils.playRound:', utils.playRound )
  /*
  expect( utils.playRound.mock.calls ).toEqual([
    [ 'john', 'sarah' ],
    [ 'john', 'sarah' ]
  ])
  */
})

delete require.cache[utilsPath]
