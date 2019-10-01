import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import FavNumClass from '../src/favnum-class-based'
import FavNumFunctional from '../src/favnum-functional'


describe('traditional class-based component', () => {

  test('verify numeric input field with associated label', () => {
    const { getByLabelText } = render( <FavNumClass /> )
    const input = getByLabelText( /favorite number/i )
    expect( input ).toHaveAttribute('type', 'number')
  })

  test('entering invalid value displays error message', () => {
    const { getByLabelText, getByTestId } = render( <FavNumClass /> )
    const input = getByLabelText( /favorite number/i )
    fireEvent.change( input, { target: { value: 10}})
    expect( getByTestId('error-message')).toHaveTextContent( /the number is invalid/i )
  })
})

describe('functional/hook-based component', () => {
  
  test('verify numeric input field with associated label', () => {
    const { getByLabelText } = render( <FavNumFunctional /> )
    const input = getByLabelText( /favorite number/i )
    expect( input ).toHaveAttribute('type', 'number')
  })

  test('entering invalid value displays error message', () => {
    const { getByLabelText, getByTestId, debug } = render( <FavNumFunctional /> )
    const input = getByLabelText( /favorite number/i )
    fireEvent.change( input, { target: { value: 10}})
    debug(input)
    expect( getByTestId('error-message')).toHaveTextContent( /the number is invalid/i )
  })
})