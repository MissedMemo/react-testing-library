import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import FavClass from '../src/favnum-class-based'
import FavHooks from '../src/favnum-hooks-based'

describe('traditional class-based component tests', () => {

  test('should render an input with expected label text', () => {
    const { getByLabelText, debug } = render( <FavClass /> )
    const input = getByLabelText(/favorite number/i )
    expect( input ).toHaveAttribute('type', 'number')
  })

  test('should update display correctly on text input ', () => {
    const { getByLabelText, debug, getByText } = render( <FavClass /> )
    const input = getByLabelText(/favorite number/i )
    debug() // optionally, inspect DOM before...
    fireEvent.change( input, { target: { value: 10}})
    debug() // ...and after
    expect( input ).toHaveAttribute('type', 'number')
    //expect( getByText(/number is invalid/i) ).toBeInTheDocument // verbose syntax
    getByText(/number is invalid/i) // abbreviated syntax
  })

  test('should respond properly to props changes', () => {
    const { getByLabelText, queryByTestId, rerender } = render( <FavClass /> )
    const input = getByLabelText(/favorite number/i )

    expect( queryByTestId('error-message') ).toBeNull
    fireEvent.change( input, { target: { value: 10}})
    expect( queryByTestId('error-message') ).not.toBeNull
    rerender( <FavClass max={10} />)
    expect( queryByTestId('error-message') ).toBeNull
  })
})

describe('new Hooks-based component test', () => {

  test('should render an input with expected label text', () => {
    const { getByLabelText, debug } = render( <FavHooks /> )
    const input = getByLabelText(/favorite number/i )
    debug(input) // optionally, output specific node, to debug tests
    expect( input ).toHaveAttribute('type', 'number')
  })

  test('should update display correctly on text input ', () => {
    const { getByLabelText, debug, getByTestId } = render( <FavHooks /> )
    const input = getByLabelText(/favorite number/i )
    fireEvent.change( input, { target: { value: 10}})
    expect( input ).toHaveAttribute('type', 'number')
    expect( getByTestId('error-message') ).toHaveTextContent(/number is invalid/i)
  })

  test('should respond properly to props changes', () => {
    const { getByLabelText, queryByTestId, rerender } = render( <FavHooks /> )
    const input = getByLabelText(/favorite number/i )
    
    expect( queryByTestId('error-message') ).toBeNull
    fireEvent.change( input, { target: { value: 10}})
    expect( queryByTestId('error-message') ).not.toBeNull
    rerender( <FavHooks max={10} />)
    expect( queryByTestId('error-message') ).toBeNull
  })
})