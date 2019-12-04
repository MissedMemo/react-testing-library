// return random winner or null for a tie

const calcWinner = (p1, p2) => {
  const n = Math.random()
  return n < 1/3 ? p1 : n < 2/3 ? p2: null
}

module.exports = { calcWinner }