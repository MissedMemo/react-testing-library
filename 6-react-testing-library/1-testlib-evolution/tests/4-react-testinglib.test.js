import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import FavNumClass from '../src/favnum-class-based'
import FavNumFunctional from '../src/favnum-functional'


describe('traditional class-based component', () => {

  test('render input field with label', () => {
    const { getByLabelText, debug } = render( <FavNumClass /> )
    debug()
    const input = getByLabelText( /favorite number/i )
    expect( input ).toHaveAttribute('type', 'number')
  })
})

describe('functional/hook-based component', () => {
  
  test('render input field with label', () => {
    const { getByLabelText, debug } = render( <FavNumFunctional /> )
    const input = getByLabelText( /favorite number/i )
    debug(input)
    expect( input ).toHaveAttribute('type', 'number')
  })
})