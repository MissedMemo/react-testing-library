import React from 'react'
import { render } from 'react-dom'
import FavNumClass from '../src/favnum-class-based'

describe('traditional class-based component', () => {
  test('render input field with label', () => {
    const node = document.createElement('div')
    render( <FavNumClass />, node )
    expect( node.querySelector('input').type ).toBe('number')
    expect( node.querySelector('label').textContent ).toBe('Favorite Number')
  })
})