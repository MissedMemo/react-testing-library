const sum = (a,b) => a + b;
const subtract = (a,b) => a - b;

sumAsync = (...args) => Promise.resolve( sum(...args) )
subtractAsync = (...args) => Promise.resolve( subtract(...args) )

module.exports = { sum, sumAsync, subtract, subtractAsync }