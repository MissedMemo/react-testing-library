import 'jest-dom/extend-expect'
import 'react-testing-library/cleanup-after-each'
import React from 'react'
import { render, fireEvent } from 'react-testing-library'

import FavNumClass from '../src/favnum-class-based'
import FavNumHook from '../src/favnum-hook-based'

describe('traditional class-based component', () => {

  test('render input field and label', () => {
    const { getByLabelText } = render( <FavNumClass /> )
    const input = getByLabelText( /favorite number/i )
    expect(input).toHaveAttribute('type','number')
  })

  test('invalid input triggers error message', () => {
    const { getByLabelText, getByTestId } = render( <FavNumClass /> )
    const input = getByLabelText( /favorite number/i )
    fireEvent.change( input, {target: {value: 10} } )
    expect( getByTestId('error-message')).toHaveTextContent( /your number is invalid/i )
  })
})

describe('new hook-based component', () => {

  test('render input field and label', () => {
    const { getByLabelText } = render( <FavNumHook /> )
    const input = getByLabelText( /favorite number/i )
    expect(input).toHaveAttribute('type','number')
  })

  test('invalid input triggers error message', () => {
    const { getByLabelText, getByTestId, debug } = render( <FavNumHook /> )
    const input = getByLabelText( /favorite number/i )
    debug(input)
    fireEvent.change( input, {target: {value: 10} } )
    debug(input)
    expect( getByTestId('error-message')).toHaveTextContent( /your number is invalid/i )
  })
})