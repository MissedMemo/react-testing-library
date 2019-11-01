import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent, queryByTestId } from '@testing-library/react'
import FavNumClass from '../src/favnum-class-based'
import FavNumFunctional from '../src/favnum-functional'


describe('traditional class-based component', () => {

  test('verify numeric input field with associated label', () => {
    const { getByLabelText } = render( <FavNumClass /> )
    const input = getByLabelText( /favorite number/i )
    expect( input ).toHaveAttribute('type', 'number')
  })

  test('entering invalid value displays error message', () => {
    const { getByLabelText, getByText } = render( <FavNumClass /> )
    const input = getByLabelText( /favorite number/i )
    fireEvent.change( input, { target: { value: 10}})
    getByText( /the number is invalid/i ) // throws error if element with this text not found
  })
})

describe('functional/hook-based component', () => {
  
  test('verify numeric input field with associated label', () => {
    const { getByLabelText } = render( <FavNumFunctional /> )
    const input = getByLabelText( /favorite number/i )
    expect( input ).toHaveAttribute('type', 'number')
  })

  test('entering invalid value displays error message', () => {
    const { getByLabelText, getByTestId, queryByTestId, debug, rerender } = render( <FavNumFunctional /> )
    const input = getByLabelText( /favorite number/i )
    fireEvent.change( input, { target: { value: 10}})
    expect( getByTestId('error-message')).toHaveTextContent( /the number is invalid/i )
    rerender(<FavNumFunctional max={12} />)
    debug(input) // value should still be 10, but NO ERROR (since passing new props)
    expect( queryByTestId('error-message') ).toBeNull()
  })
})