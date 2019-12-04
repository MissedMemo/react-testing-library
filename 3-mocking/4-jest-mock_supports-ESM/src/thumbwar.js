const { calcWinner } = require('./utils')

const ThumbWar = (player1, player2) => {

  const winsNeeded = 3
  
  const wins = {
    [player1]: 0,
    [player2]: 0
  }

  while ( wins[player1] < winsNeeded && wins[player2] < winsNeeded ) {

    const winner = calcWinner( player1, player2 )

    wins[winner]++
  }

  return wins[player1] > wins[player2] ? player1 : player2
}

module.exports = ThumbWar