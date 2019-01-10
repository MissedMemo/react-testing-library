const playRound = require('./utils')

const pointsNeeded = 2

const thumbwar = (player1, player2) => {

  let pts1 = 0
  let pts2 = 0

  while( pts1 < pointsNeeded && pts2 < pointsNeeded ) {
    winner = playRound( player1, player2 )
    if ( winner ) { // not a tie
      if ( winner === player1 ) {
        pts1++
      } else {
        pts2++
      }
    }
  }

  return pts1 > pts2 ? player1 : player2
}

module.exports = thumbwar