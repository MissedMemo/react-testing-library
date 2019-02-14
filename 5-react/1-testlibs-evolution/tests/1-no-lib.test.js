import React from 'react'
import { render } from 'react-dom'

import FavNumClass from '../src/favnum-class-based'
import FavNumHook from '../src/favnum-hook-based'

describe('traditional class-based component', () => {

  test('render input field and label', () => {
    const node = document.createElement('div')
    render( <FavNumClass />, node )
    expect(node.querySelector('input').type).toBe('number')
    expect( node.querySelector('label').textContent ).toBe('Favorite Number')
  })
})

describe('new hook-based component', () => {

  test('render input field and label', () => {
    const node = document.createElement('div')
    render( <FavNumHook />, node )
    expect(node.querySelector('input').type).toBe('number')
    expect( node.querySelector('label').textContent ).toBe('Favorite Number')
  })
})