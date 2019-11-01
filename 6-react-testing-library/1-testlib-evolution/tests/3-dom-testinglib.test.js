import React from 'react'
import { render } from 'react-dom'
import { getQueriesForElement } from '@testing-library/dom'
import FavClass from '../src/favnum-class-based'
import FavHooks from '../src/favnum-hooks-based'

describe('traditional class-based component tests', () => {

  test('should render an input with expected label text', () => {
    const div = document.createElement('div')
    render( <FavClass />, div )
    const { getByLabelText } = getQueriesForElement(div)
    const input = getByLabelText(/favorite number/i )
    expect( input ).toHaveAttribute('type', 'number')
  })
})

describe('new Hooks-based component test', () => {

  test('should render an input with expected label text', () => {
    const div = document.createElement('div')
    render( <FavHooks />, div )
    const { getByLabelText } = getQueriesForElement(div)
    const input = getByLabelText(/favorite number/i )
    expect( input ).toHaveAttribute('type', 'number')
  })
})