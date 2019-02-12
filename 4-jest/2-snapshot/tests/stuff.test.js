import { sum } from '../src/stuff'

test( 'sum', () => {
  const result = sum( [1,2,3,4,5])
  expect(result).toBe(15)
})