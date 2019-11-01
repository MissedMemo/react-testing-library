import React from 'react'
import { render } from '@testing-library/react'
import FavClass from '../src/favnum-class-based'
import FavHooks from '../src/favnum-hooks-based'

describe('traditional class-based component tests', () => {

  test('should render an input with expected label text', () => {
    const { getByLabelText, debug } = render( <FavClass /> )
    debug() // optionally, output entire DOM, to debug tests
    const input = getByLabelText(/favorite number/i )
    expect( input ).toHaveAttribute('type', 'number')
  })
})

describe('new Hooks-based component test', () => {

  test('should render an input with expected label text', () => {
    const { getByLabelText, debug } = render( <FavHooks /> )
    const input = getByLabelText(/favorite number/i )
    debug(input) // optionally, output specific node, to debug tests
    expect( input ).toHaveAttribute('type', 'number')
  })
})