import React from 'react'
import { render } from 'react-dom'
import { FavoriteNumber } from '../src/favnum-hooks-based'

test('renders number input with appropriate label', () => {
  const div = document.createElement('div')
  render( <FavoriteNumber />, div )
  expect(div.querySelector('input').type).toBe('number')
  expect(div.querySelector('label').textContent).toBe('Favorite Number:')
})
