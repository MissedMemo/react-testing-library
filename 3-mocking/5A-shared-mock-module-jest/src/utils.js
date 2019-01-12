
// randomly return player1, player2, or null (representing a tie)
function playRound(p1, p2) {
  const outcome = Math.random()
  return outcome < 1/3 ? p1 : outcome < 2/3 ? p2 : null
}

module.exports = { playRound }