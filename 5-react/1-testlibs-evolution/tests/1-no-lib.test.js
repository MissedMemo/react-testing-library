import React from 'react'
import { render } from 'react-dom'

import FavoriteNumber from '../src/favnum-class-based'

test('render input field and label', () => {
  const node = document.createElement('div')
  render( <FavoriteNumber />, node )
  expect(node.querySelector('input').type).toBe('number')
  expect( node.querySelector('label').textContent ).toBe('Favorite Number')
})