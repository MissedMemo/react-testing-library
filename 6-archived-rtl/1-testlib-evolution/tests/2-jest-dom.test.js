import React from 'react'
import { render } from 'react-dom'
import '@testing-library/jest-dom/extend-expect'
import FavNumClass from '../src/favnum-class-based'
import FavNumFunctional from '../src/favnum-functional'


describe('traditional class-based component', () => {

  test('render input field with label', () => {
    const node = document.createElement('div')
    render( <FavNumClass />, node )
    expect( node.querySelector('input') ).toHaveAttribute('type', 'number')
    expect( node.querySelector('label') ).toHaveTextContent('Favorite Number')
  })
})

describe('functional/hook-based component', () => {
  
  test('render input field with label', () => {
    const node = document.createElement('div')
    render( <FavNumFunctional />, node )
    expect( node.querySelector('input') ).toHaveAttribute('type', 'number')
    expect( node.querySelector('label') ).toHaveTextContent('Favorite Number')
  })
})