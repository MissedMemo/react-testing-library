const assert = require('assert')
const utils = require('./utils')
const ThumbWar = require('./thumbwar')

// override lib method...
const originalMethod = utils.calcWinner
utils.calcWinner = (p1,p2) => p2

const winner = ThumbWar( "Bozo", "Tom" )
assert.strictEqual( winner, "Tom" )

// restore to original (protect other client apps or tests)
utils.calcWinner = originalMethod