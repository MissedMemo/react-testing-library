const fn = ( mockFunction = () => {} ) => {
  const wrapper = (...args) => {
    wrapper.mock.calls.push(args)
    return mockFunction(...args)
  }
  wrapper.mock = { calls: [] }
  return wrapper
}

module.exports = {
  playRound: fn( (p1,p2) => p1 )
}