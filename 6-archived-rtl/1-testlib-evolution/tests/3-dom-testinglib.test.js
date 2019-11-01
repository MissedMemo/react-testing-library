import React from 'react'
import { render } from 'react-dom'
import '@testing-library/jest-dom/extend-expect'
import { queries } from '@testing-library/dom'
import FavNumClass from '../src/favnum-class-based'
import FavNumFunctional from '../src/favnum-functional'


describe('traditional class-based component', () => {

  test('render input field with label', () => {
    const node = document.createElement('div')
    render( <FavNumClass />, node )
    const input = queries.getByLabelText( node, 'Favorite Number' )
    expect( input ).toHaveAttribute('type', 'number')
  })
})

describe('functional/hook-based component', () => {
  
  test('render input field with label', () => {
    const node = document.createElement('div')
    render( <FavNumFunctional />, node )
    const input = queries.getByLabelText( node, 'Favorite Number' )
    expect( input ).toHaveAttribute('type', 'number')
  })
})