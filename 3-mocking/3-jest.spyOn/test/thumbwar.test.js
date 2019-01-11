const thumbwar = require('../src/thumbwar')
const utils = require('../src/utils')

test('return a winner (using jest.spyOn)', () => {

  jest.spyOn( utils, 'playRound' )
  utils.playRound.mockImplementation( (p1,p2) => p1 )

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

  utils.playRound.mockRestore()
})

test('return a winner (using CUSTOM implementation of spyOn)', () => {

  const fn = ( mockFunction = () => {} ) => {
    const wrapper = (...args) => {
      wrapper.mock.calls.push(args)
      return mockFunction(...args)
    }
    wrapper.mock = { calls: [] }
    wrapper.substitute = replacement => (mockFunction = replacement)
    return wrapper
  }

  const fnSpy = ( obj, prop ) => {
    const origFunction = obj[prop]
    obj[prop] = fn()
    obj[prop].restore = () => { obj[prop] = origFunction }
  }

  fnSpy( utils, 'playRound' )
  utils.playRound.substitute( (p1,p2) => p1 )

  const winner = thumbwar('john', 'sarah')

  expect( winner ).toBe('john')
  expect( utils.playRound.mock.calls ).toEqual([
    [ 'john', 'sarah' ],
    [ 'john', 'sarah' ]
  ])

  utils.playRound.restore()
})